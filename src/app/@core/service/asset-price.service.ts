import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { AssetPrice, AssetPriceData } from '../data/asset-price';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AssetPriceService extends AssetPriceData {


  private data = {};

  constructor(private http: HttpClient) {
    super();
  }

  getAssetPrice(ticker: string): Observable<AssetPrice> {
    return this.http.get<any>(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=c17q3af48v6sj55b3e2g`)
        .pipe(
            map(response => {
                const price: AssetPrice = response;
                // console.log(price);
                return price;
            }),
            // catchError(this.handleError)
        );
        // .subscribe( data => console.log('data'), error => console.log('error'))
  }
}
