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

  private ETF: AssetList[] = [
    { assetName: 'ETF Xino CSI las vegas', ticker: '2TheMoOn', broker: 'DEGIRO', type: 'ETF', market: 'Riceland', ownedShares: 2,
        value: 3049.2, totalValue: 6098.4, gains: 1647.57, gainsPercent: 27,
        comparison: { prevDate: 'M', prevValue: -15, nextDate: 'W', nextValue: 12 },
        img: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5aecccdf31358e612fb80afa%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1234%26cropX2%3D3554%26cropY1%3D348%26cropY2%3D2667'
        , BEP: 12, todayGains: 15 },
  ];

  private getStockData(): Observable <AssetList[]> {
    return this.http.get<any>(`${environment.apiUrl}/investors/admin/positions/stock`)
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
    return this.http.get<any>(`${environment.apiUrl}/investors/admin/positions/crypto`)
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

  private getETFData(): AssetList[] {
    return this.ETF;
  }

  getAssetListData(type: string): Observable <AssetList[]> {
    switch (type) {
      case 'stock':
        return this.getStockData();

      case 'ETF':
        return observableOf(this.getETFData());

      case 'crypto':
        return this.getCryptoData();

      default:
        break;
    }
  }
}
