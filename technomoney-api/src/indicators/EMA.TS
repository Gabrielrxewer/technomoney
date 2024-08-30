export class EMA {
  public static calculate(prices: number[], period: number): number {
    if (prices.length < period) return 0;

    const k = 2 / (period + 1);
    return prices.slice(-period).reduce((prev, price, i) => {
      return i === 0 ? price : price * k + prev * (1 - k);
    }, 0);
  }
}
