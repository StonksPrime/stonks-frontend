import { Observable } from 'rxjs';

export class AssetYahoo {
    language: string;
    region: string;
    quoteType: string;
    quoteSourceName: string;
    triggerable: string;
    currency: string;
    exchange: string;
    shortName: string;
    longName: string;
    messageBoardId: string;
    exchangeTimezoneName: string;
    exchangeTimezoneShortName: string;
    gmtOffSetMilliseconds: string;
    market: string;
    esgPopulated: string;
    epsCurrentYear: string;
    priceEpsCurrentYear: string;
    sharesOutstanding: string;
    bookValue: string;
    fiftyDayAverage: string;
    fiftyDayAverageChange: string;
    fiftyDayAverageChangePercent: string;
    twoHundredDayAverage: string;
    twoHundredDayAverageChange: string;
    twoHundredDayAverageChangePercent: string;
    marketCap: string;
    forwardPE: string;
    priceToBook: string;
    sourceInterval: string;
    exchangeDataDelayedBy: string;
    tradeable: string;
    firstTradeDateMilliseconds: string;
    priceHint: string;
    marketState: string;
    postMarketChangePercent: string;
    postMarketTime: string;
    postMarketPrice: string;
    postMarketChange: string;
    regularMarketChange: string;
    regularMarketChangePercent: string;
    regularMarketTime: string;
    regularMarketPrice: string;
    regularMarketDayHigh: string;
    regularMarketDayRange: string;
    regularMarketDayLow: string;
    regularMarketVolume: string;
    regularMarketPreviousClose: string;
    bid: string;
    ask: string;
    bidSize: string;
    askSize: string;
    fullExchangeName: string;
    financialCurrency: string;
    regularMarketOpen: string;
    averageDailyVolume3Month: string;
    averageDailyVolume10Day: string;
    fiftyTwoWeekLowChange: string;
    fiftyTwoWeekLowChangePercent: string;
    fiftyTwoWeekRange: string;
    fiftyTwoWeekHighChange: string;
    fiftyTwoWeekHighChangePercent: string;
    fiftyTwoWeekLow: string;
    fiftyTwoWeekHigh: string;
    dividendDate: string;
    earningsTimestamp: string;
    earningsTimestampStart: string;
    earningsTimestampEnd: string;
    trailingAnnualDividendRate: string;
    trailingPE: string;
    trailingAnnualDividendYield: string;
    epsTrailingTwelveMonths: string;
    epsForward: string;
    displayName: string;
    symbol: string;
 }

export abstract class AssetYahooData {
  abstract getAssetYahoo(ticker: string): Observable <AssetYahoo>;
}