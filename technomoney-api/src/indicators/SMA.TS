export class SMA {
  public static calculate(prices: number[], period: number): number {
    if (prices.length < period) return 0;

    const sum = prices.slice(-period).reduce((acc, price) => acc + price, 0);
    return sum / period;
  }
}
