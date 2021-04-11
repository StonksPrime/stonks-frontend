import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of as observableOf,  Observable } from 'rxjs';
import { AssetList, AssetListData } from '../data/asset-list';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AssetListService extends AssetListData {

  private data = {};

  constructor(private http: HttpClient) {
    super();
  }

  private getStockData(): Observable <AssetList[]> {
    return this.http.get<any>(`${environment.apiUrl}${environment.backendUrl}/investors/admin/positions/stock`)
        .pipe(
            map(response => {
                // console.log(response);
                const assets: AssetList[] = response;
                return assets;
            }),
            // catchError(this.handleError)
        );
  }

  private getCryptoData(): Observable <AssetList[]> {
    return this.http.get<any>(`${environment.apiUrl}${environment.backendUrl}/investors/admin/positions/crypto`)
        .pipe(
            map(response => {
                // console.log(response);
                const assets: AssetList[] = response;
                return assets;
            }),
            // catchError(this.handleError)
        );
        // .subscribe( data => console.log('data'), error => console.log('error'))
  }

  private getETFData(): Observable <AssetList[]> {
    return this.http.get<any>(`${environment.apiUrl}${environment.backendUrl}/investors/admin/positions/etf`)
    .pipe(
        map(response => {
            // console.log(response);
            const assets: AssetList[] = response;
            return assets;
        }),
        // catchError(this.handleError)
    );
  }

  getAssetListData(type: string): Observable <AssetList[]> {
    switch (type) {
      case 'stock':
        return this.getStockData();

      case 'ETF':
        return this.getETFData();

      case 'crypto':
        return this.getCryptoData();

      default:
        break;
    }
  }
}
