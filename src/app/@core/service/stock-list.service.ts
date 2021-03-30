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

  private stocks: AssetList[] = [
    { assetName: 'Amazon', ticker: 'AMZN', broker: 'DEGIRO', type: 'stock', market: 'Nasdaq', ownedShares: 2,
        value: 3049.2, totalValue: 6098.4, gains: 1647.57, gainsPercent: 27, delta: { up: true, value: 27},
        comparison: { prevDate: 'M', prevValue: -15, nextDate: 'W', nextValue: 12 },
        img: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg', BEP: 12, todayGains: 15 },
    { assetName: 'Tesla', ticker: 'TSLA', broker: 'DEGIRO', type: 'stock', market: 'Nasdaq', ownedShares: 4,
        value: 529.2, totalValue: 2141.9, gains: 1306.56, gainsPercent: 61, delta: { up: true, value: 61},
        comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 32 },
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/482px-Tesla_T_symbol.svg.png'
        , BEP: 12, todayGains: 15 },
    { assetName: 'Apple', ticker: 'APPL', broker: 'DEGIRO', type: 'stock', market: 'Nasdaq', ownedShares: 10,
        value: 127.4, totalValue: 1274, gains: 89.18, gainsPercent: -7, delta: { up: false, value: 7},
        comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 12 },
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Apple_logo_dark_grey.svg/1200px-Apple_logo_dark_grey.svg.png'
        , BEP: 12, todayGains: 15 },
  ];

  private cryptos: AssetList[] = [
    { assetName: 'Bitcoinn', ticker: 'BTC', broker: 'Kraken', type: 'crypto', market: 'Moon', ownedShares: 2,
        value: 3049.2, totalValue: 6098.4, gains: 1647.57, gainsPercent: 27, delta: { up: true, value: 27},
        comparison: { prevDate: 'M', prevValue: -15, nextDate: 'W', nextValue: 12 },
        img: 'https://storage.googleapis.com/www-paredro-com/uploads/2019/04/bitcoin.jpg' , BEP: 12, todayGains: 15},
    { assetName: 'Ethereum', ticker: 'ETH', broker: 'Kraken', type: 'crypto', market: 'Moon', ownedShares: 4,
        value: 529.2, totalValue: 2141.9, gains: 1306.56, gainsPercent: 61, delta: { up: true, value: 61},
        comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 32 },
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png'
        , BEP: 12, todayGains: 15},
    { assetName: 'CRO', ticker: 'CRO', broker: 'Kraken', type: 'crypto', market: 'Moon', ownedShares: 10,
        value: 127.4, totalValue: 1274, gains: 89.18, gainsPercent: -7, delta: { up: false, value: 7},
        comparison: { prevDate: 'M', prevValue: 5, nextDate: 'W', nextValue: 12 },
        img: 'https://s2.coinmarketcap.com/static/img/coins/200x200/3635.png' , BEP: 12, todayGains: 15 },
  ];

  private ETF: AssetList[] = [
    { assetName: 'ETF Xino CSI las vegas', ticker: '2TheMoOn', broker: 'DEGIRO', type: 'ETF', market: 'Riceland', ownedShares: 2,
        value: 3049.2, totalValue: 6098.4, gains: 1647.57, gainsPercent: 27, delta: { up: true, value: 27},
        comparison: { prevDate: 'M', prevValue: -15, nextDate: 'W', nextValue: 12 },
        img: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5aecccdf31358e612fb80afa%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1234%26cropX2%3D3554%26cropY1%3D348%26cropY2%3D2667'
        , BEP: 12, todayGains: 15 },
  ];

  private getStockData(): AssetList[] {
    return this.stocks;
  }

  private getCryptoData(): AssetList[] {
    const asset: Observable<any> = this.http.get<any>(`${environment.apiUrl}/investors/admin/positions/crypto`)
        .pipe(
            map(response => {
              // console.log(response);
                const assets: AssetList[] = response;
                return assets;
            }),
            // catchError(this.handleError)
        );
        // .subscribe( data => console.log('data'), error => console.log('error'))
    asset.subscribe();
    return this.cryptos;
  }

  private getETFData(): AssetList[] {
    return this.ETF;
  }

  getAssetListData(type: string): Observable<AssetList> {
    this.data = {
      stock: this.getStockData(),
      ETF: this.getETFData(),
      crypto: this.getCryptoData(),
    };
    return observableOf(this.data[type]);
  }
}
