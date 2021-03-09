import { Observable } from 'rxjs';

export interface StockList {
  date: string;
  value: number;
  delta: {
    up: boolean;
    value: number;
  };
  comparison: {
    prevDate: string;
    prevValue: number;
    nextDate: string;
    nextValue: number;
  };
}

export abstract class StockListData {
  abstract getStockListData(period: string): Observable<StockList>;
}
