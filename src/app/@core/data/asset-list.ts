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
  img: string;
}

export abstract class AssetListData {
  abstract getAssetListData(period: string): Observable<AssetList>;
}
