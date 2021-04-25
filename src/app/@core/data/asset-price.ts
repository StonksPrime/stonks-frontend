import { Observable } from 'rxjs';

export class AssetPrice {
  c: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: Date;

  /*constructor( c: number, h: number, l: number, o: number, pc: number, t: number ) {
    this.current = c;
    this.high = h;
    this.low = l;
    this.open = o;
    this.close = pc;
    this.timestamp = new Date(t);
  }*/
 }

export abstract class AssetPriceData {
  abstract getAssetPrice(ticker: string): Observable <AssetPrice>;
}
