/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let maxProfit = 0;
  prices.forEach((price, index) => {
    if (price < prices[index + 1]) {
      maxProfit += prices[index + 1] - price;
    }
  });
  return maxProfit;
};