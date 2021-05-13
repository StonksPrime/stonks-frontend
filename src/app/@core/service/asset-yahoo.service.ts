import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { AssetYahoo, AssetYahooData } from '../data/asset-yahoo';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AssetYahooService extends AssetYahooData {


  private data = {};

  constructor(private http: HttpClient) {
    super();
  }

  getAssetYahoo(ticker: string): Observable<AssetYahoo> {
    return this.http.get<any>(`https://query2.finance.yahoo.com/v7/finance/quote?symbols=${ticker}`)
        .pipe(
            map(response => {
                const yahoo: AssetYahoo = response['quoteResponse'].result[0];
                'console.log(response);
                return yahoo;
            }),
            // catchError(this.handleError)
        );
        // .subscribe( data => console.log('data'), error => console.log('error'))
  }
}
