import { Observable } from 'rxjs';

export interface AssetList {
  assetName: string;
  ticker: string;
  broker: string;
  type: string;
  market: string;
  ownedShares: number;
  value: number;
  totalValue: number;
  gains: number;
  gainsPercent: number;
  comparison: {
    prevDate: string;
    prevValue: number;
    nextDate: string;
    nextValue: number;
  };
  img: string;
  BEP: number;
  todayGains: number;
}

export abstract class AssetListData {
  abstract getAssetListData(type: string): Observable <AssetList[]>;
}
