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
import { log } from 'console';

@Injectable()
export class StocksService {
  constructor(
    @InjectModel('stocks')
    private stockModel: Model<IStock>,
  ) {}

  //Récupération du prix en temps réel
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
      await page.goto(url, { waitUntil: 'networkidle2' });

      // Sélecteurs CSS des prix et variations sur Yahoo Finance
      const priceSelector = 'fin-streamer[data-field="regularMarketPrice"]';
      const changeSelector =
        'fin-streamer[data-field="regularMarketChangePercent"]';

      const price = await page.$eval(priceSelector, (el) =>
        el?.textContent?.trim(),
      );
      const change = await page.$eval(changeSelector, (el) =>
        el?.textContent?.trim(),
      );

      console.log(
        ` Retrieved - Symbol: ${symbol}, Price: ${price}, Change: ${change}`,
      );

      if (!price || !change) {
        throw new Error('Price or Change not found on the page');
      }

      // Nettoyage de la chaîne de pourcentage pour la convertir en nombre
      const percentageChange = parseFloat(change.replace('%', '').trim());
      if (isNaN(percentageChange)) {
        throw new Error('Failed to convert percentage change to number');
      }

      await browser.close();

      // Enregistrement en base de données avec la valeur correcte de `percentageChange` (en tant que nombre)
      // Créer un nouvel enregistrement pour le stock
      const newStock = new this.stockModel({
        symbol,
        currentPrice: parseFloat(price),
        percentageChange,
      });
      await newStock.save(); // Sauvegarder le stock dans la base de données

      console.log('🟢 Stock saved to DB:', newStock);

      // Return the result
      return { symbol, price, change, percentageChange };
    } catch (error) {
      console.error(' Error fetching stock data:', error.message);
      await browser.close();
      throw new HttpException('Stock not found', HttpStatus.NOT_FOUND);
    }
  }
 
}
