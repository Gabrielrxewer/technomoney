import { EMA } from "./EMA";

export class MACD {
  public static calculate(
    prices: number[],
    shortPeriod: number,
    longPeriod: number,
    signalPeriod: number
  ) {
    const shortEMA = prices.map((_, i, arr) =>
      EMA.calculate(arr.slice(0, i + 1), shortPeriod)
    );
    const longEMA = prices.map((_, i, arr) =>
      EMA.calculate(arr.slice(0, i + 1), longPeriod)
    );

    const macdLine = shortEMA.map((val, i) => val - longEMA[i]);
    const signalLine = macdLine.map((_, i, arr) =>
      EMA.calculate(arr.slice(0, i + 1), signalPeriod)
    );
    const histogram = macdLine.map((val, i) => val - signalLine[i]);

    return { macdLine, signalLine, histogram };
  }
}
