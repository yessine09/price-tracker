import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as puppeteer from 'puppeteer';
import { IStock } from './interface/stocks.interface';

@Injectable()
export class StocksService {
  constructor(
    @InjectModel('stocks')
    private stockModel: Model<IStock>,
  ) {}

  // Récupération du prix en temps réel
  async getStockPrice(symbol: string): Promise<any> {
    if (!symbol || symbol === 'getAll') {
      throw new HttpException(
        'Symbole de stock invalide',
        HttpStatus.BAD_REQUEST,
      );
    }

    const url = `https://finance.yahoo.com/quote/${symbol}`;
    console.log(`Fetching stock data from: ${url}`);

    // Lancement de Puppeteer en mode headless
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: 'domcontentloaded' });

      // Sélecteurs CSS pour récupérer les données
      const priceSelector = 'fin-streamer[data-field="regularMarketPrice"]';
      const changeSelector =
        'fin-streamer[data-field="regularMarketChangePercent"]';
      const dateSelector = 'div[data-testid="qsp-price-detail"] span';

      // Extraction des valeurs
      const price = await page.$eval(priceSelector, (el) =>
        el?.textContent?.trim(),
      );
      const change = await page.$eval(changeSelector, (el) =>
        el?.textContent?.trim(),
      );

      // Tentative de récupération de la date "As of"
      let dateText = await page.evaluate(() => {
        const dateElement = document.querySelector(
          'div[data-testid="qsp-price-detail"] span',
        );
        return dateElement ? dateElement.textContent.trim() : null;
      });

      // Si aucune date n'est trouvée, on utilise la date actuelle du système
      if (!dateText) {
        dateText = new Date().toLocaleString('en-US', {
          timeZone: 'America/New_York',
        });
      }

      console.log(
        `Retrieved - Symbol: ${symbol}, Price: ${price}, Change: ${change}, Date: ${dateText}`,
      );

      if (!price || !change) {
        throw new Error('Price or Change not found on the page');
      }

      // Nettoyage et conversion des valeurs
      const currentPrice = parseFloat(price.replace(',', ''));
      const percentageChange = parseFloat(change.replace('%', '').trim());

      if (isNaN(currentPrice) || isNaN(percentageChange)) {
        throw new Error(
          'Failed to convert price or percentage change to number',
        );
      }

      await browser.close();

      // Enregistrement en base de données
      const newStock = new this.stockModel({
        symbol,
        currentPrice,
        percentageChange,
        date: dateText,
      });

      await newStock.save();
      console.log('Data to save:', {
        symbol,
        currentPrice,
        percentageChange,
        dateText,
      });

      return { symbol, currentPrice, percentageChange, date: dateText };
    } catch (error) {
      await browser.close();
      throw new HttpException('Stock not found', HttpStatus.NOT_FOUND);
    }
  }

  async getTheLastStock(): Promise<IStock | null> {
    const lastStock = await this.stockModel
      .findOne()
      .sort({ createdAt: -1 })
      .exec();

    if (!lastStock) {
      throw new NotFoundException('No stock data found');
    }

    return lastStock;
  }

  async getLastStockData(symbol: string): Promise<any> {
    if (!symbol) {
      throw new HttpException('Symbol is required', HttpStatus.BAD_REQUEST);
    }

    // Recherche de la dernière donnée en fonction du symbole
    const latestStock = await this.stockModel
      .findOne({ symbol })
      .sort({ createdAt: -1 }) 
      .exec();

    if (!latestStock) {
      throw new HttpException(
        `No stock data found for symbol: ${symbol}`,
        HttpStatus.NOT_FOUND,
      );
    }


    return latestStock;
  }

  async findOne(id: string): Promise<IStock> {
    let stock = await this.stockModel.findById(id).exec();
    if (!stock) {
      throw new NotFoundException(`stock with id ${id} is not found`);
    }
    return stock;
  }
}
