import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as puppeteer from 'puppeteer';
import { HistoricalPrice } from './entities/historical-price.entity';

@Injectable()
export class HistoricalPriceService {
  constructor(
    @InjectModel('historicalPrice')
    private historicalPriceModel: Model<HistoricalPrice>,
  ) {}

  async getStockHistory(symbol: string): Promise<any> {
    const url = `https://finance.yahoo.com/quote/${symbol}/history`;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: 'networkidle2' });

      const rows = await page.$$('tr');
      const history = [];

      for (const row of rows.slice(1, 8)) {
        const cols = await row.$$eval('td', (tds) =>
          tds.map((td) => td.textContent?.trim()),
        );

        if (cols.length >= 6) {
          const historicalPrice = new this.historicalPriceModel({
            symbol,
            date: new Date(cols[0]),
            open: parseFloat(cols[1]),
            high: parseFloat(cols[2]),
            low: parseFloat(cols[3]),
            close: parseFloat(cols[4]),
            volume: parseInt(cols[6].replace(/,/g, ''), 10),
          });

          await historicalPrice.save();
          history.push(historicalPrice);
        }
      }

      await browser.close();
      return { symbol, history };
    } catch (error) {
      await browser.close();
      throw new HttpException('Stock history not found', HttpStatus.NOT_FOUND);
    }
  }
}
