export class RSI {
  public static calculate(prices: number[], period: number): number {
    if (prices.length < period) return 0;

    let gain = 0,
      loss = 0;

    for (let i = 1; i < period; i++) {
      const diff = prices[i] - prices[i - 1];
      if (diff > 0) gain += diff;
      else loss -= diff;
    }

    const rs = gain / loss;
    return 100 - 100 / (1 + rs);
  }
}
