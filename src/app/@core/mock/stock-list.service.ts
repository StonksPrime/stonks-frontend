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
    { date: 'Amazon', value: 329.2, delta: { up: true, value: 12},
          comparison: { prevDate: 'M', prevValue: -15, nextDate: 'W', nextValue: 12 } },
    { date: 'Tesla', value: 329.2, delta: { up: false, value: 7},
          comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 12 } },
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
