import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { StockList, StockListData } from '../data/stock-list';

@Injectable()
export class StockListService extends StockListData {

  private getRandom = (roundTo: number) => Math.round(Math.random() * roundTo);
  private data = {};

  constructor(private period: PeriodsService) {
    super();
    this.data = {
      stock: this.getStockData(),
      ETF: this.getETFData(),
      crypto: this.getCryptoData(),
    };
  }

  private stocks: StockList[] = [
    { assetName: 'Amazon', ticker: 'AMZN', broker: 'DEGIRO', type: 'stock', market: 'Nasdaq', ownedShares: 2,
        value: 3049.2, totalValue: 6098.4, gains: 1647.57, gainsPercent: 27, delta: { up: true, value: 27},
        comparison: { prevDate: 'M', prevValue: -15, nextDate: 'W', nextValue: 12 },
        img: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg' },
    { assetName: 'Tesla', ticker: 'TSLA', broker: 'DEGIRO', type: 'stock', market: 'Nasdaq', ownedShares: 4,
        value: 529.2, totalValue: 2141.9, gains: 1306.56, gainsPercent: 61, delta: { up: true, value: 61},
        comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 32 },
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/482px-Tesla_T_symbol.svg.png' },
    { assetName: 'Apple', ticker: 'APPL', broker: 'DEGIRO', type: 'stock', market: 'Nasdaq', ownedShares: 10,
        value: 127.4, totalValue: 1274, gains: 89.18, gainsPercent: -7, delta: { up: false, value: 7},
        comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 12 },
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Apple_logo_dark_grey.svg/1200px-Apple_logo_dark_grey.svg.png' },
  ];

  private cryptos: StockList[] = [
    { assetName: 'Bitcoin', ticker: 'BTC', broker: 'Kraken', type: 'crypto', market: 'Moon', ownedShares: 2,
        value: 3049.2, totalValue: 6098.4, gains: 1647.57, gainsPercent: 27, delta: { up: true, value: 27},
        comparison: { prevDate: 'M', prevValue: -15, nextDate: 'W', nextValue: 12 },
        img: 'https://storage.googleapis.com/www-paredro-com/uploads/2019/04/bitcoin.jpg' },
    { assetName: 'Ethereum', ticker: 'ETH', broker: 'Kraken', type: 'crypto', market: 'Moon', ownedShares: 4,
        value: 529.2, totalValue: 2141.9, gains: 1306.56, gainsPercent: 61, delta: { up: true, value: 61},
        comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 32 },
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png' },
    { assetName: 'CRO', ticker: 'CRO', broker: 'Kraken', type: 'crypto', market: 'Moon', ownedShares: 10,
        value: 127.4, totalValue: 1274, gains: 89.18, gainsPercent: -7, delta: { up: false, value: 7},
        comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 12 },
        img: 'https://s2.coinmarketcap.com/static/img/coins/200x200/3635.png' },
  ];

  private ETF: StockList[] = [
    { assetName: 'ETF Xino CSI las vegas', ticker: '2TheMoOn', broker: 'DEGIRO', type: 'ETF', market: 'Riceland', ownedShares: 2,
        value: 3049.2, totalValue: 6098.4, gains: 1647.57, gainsPercent: 27, delta: { up: true, value: 27},
        comparison: { prevDate: 'M', prevValue: -15, nextDate: 'W', nextValue: 12 },
        img: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5aecccdf31358e612fb80afa%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1234%26cropX2%3D3554%26cropY1%3D348%26cropY2%3D2667' },
  ];

  private getStockData(): StockList[] {
    return this.stocks;
  }

  private getCryptoData(): StockList[] {
    return this.cryptos;
  }

  private getETFData(): StockList[] {
    return this.ETF;
  }

  private reduceData(timePeriods: string[], getFirstDateInPeriod: () => string): StockList[] {
    return timePeriods.reduce((result, timePeriod, index) => {
      const hasResult = result[index - 1];
      const prevDate = hasResult ?
        result[index - 1].comparison.nextDate :
        getFirstDateInPeriod();
      const prevValue = hasResult ?
        result[index - 1].comparison.nextValue :
        this.getRandom(100);
      const nextValue = this.getRandom(100);
      const deltaValue = prevValue - nextValue;

      const item = {
        date: timePeriod,
        value: this.getRandom(1000),
        delta: {
          up: deltaValue <= 0,
          value: Math.abs(deltaValue),
        },
        comparison: {
          prevDate,
          prevValue,
          nextDate: timePeriod,
          nextValue,
        },
      };

      return [...result, item];
    }, []);
  }

  getStockListData(type: string): Observable<StockList> {
    return observableOf(this.data[type]);
  }
}
