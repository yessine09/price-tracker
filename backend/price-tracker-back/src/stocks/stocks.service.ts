import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as puppeteer from 'puppeteer';

@Injectable()
export class StocksService {
  //Récupération du prix en temps réel
  async getStockPrice(symbol: string): Promise<any> {
    const url = `https://finance.yahoo.com/quote/${symbol}`;

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
        el.textContent.trim(),
      );
      const change = await page.$eval(changeSelector, (el) =>
        el.textContent.trim(),
      );

      await browser.close();

      return { symbol, price, change };
    } catch (error) {
      await browser.close();
      throw new HttpException('Stock not found', HttpStatus.NOT_FOUND);
    }
  }

  // 🔹 Récupération de l'historique des prix (7 derniers jours)
  async getStockHistory(symbol: string): Promise<any> {
    const url = `https://finance.yahoo.com/quote/${symbol}/history`;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
      await page.goto(url, { waitUntil: 'networkidle2' });

      const rows = await page.$$('tr');
      const history = [];

      for (const row of rows.slice(1, 8)) {
        // Récupérer 7 jours
        const cols = await row.$$eval('td', (tds) =>
          tds.map((td) => td.textContent?.trim()),
        );

        if (cols.length >= 6) {
          history.push({
            date: cols[0],
            open: cols[1],
            high: cols[2],
            low: cols[3],
            close: cols[4],
            volume: cols[6],
          });
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
