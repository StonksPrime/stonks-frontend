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
      week: this.getDataWeek(),
      month: this.getDataMonth(),
      year: this.getDataYear(),
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

  private getDataWeek(): StockList[] {
    return this.stocks;
  }

  private getDataMonth(): StockList[] {
    const getFirstDateInPeriod = () => {
      const months = this.period.getMonths();

      return months[months.length - 1];
    };

    return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
  }

  private getDataYear(): StockList[] {
    const getFirstDateInPeriod = () => {
      const years = this.period.getYears();

      return `${parseInt(years[0], 10) - 1}`;
    };

    return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
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

  getStockListData(period: string): Observable<StockList> {
    return observableOf(this.data[period]);
  }
}
