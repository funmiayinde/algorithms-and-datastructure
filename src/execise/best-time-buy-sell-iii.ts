/**
 * Best Time to Buy and Sell Stock III
 *
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete at most two transactions.
 *
 * Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
 *
 * Example 1:
 *
 * Input: [3,3,5,0,0,3,1,4]
 * Output: 6
 * Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 *              Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
 *
 * Example 2:
 *
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
 *              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
 *              engaging multiple transactions at the same time. You must sell before buying again.
 *
 * Example 3:
 *
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 */

 /**
  * Solution - 1
  * @param {number[]} prices
  * @return {number}
  */
const maxProfit_1 = (prices: number[]) => {
    if (prices.length === 0) return 0;

    const len: number = prices.length;

    const left: number[] = Array(len).fill(0);
    const right: number[] = Array(len).fill(0);

    let profit: number = 0;

    // [3,3,5,0,0,3,1,4]

    for (let i = 1, min = prices[0]; i < len; i++) {
        console.log(`price-${i}:`, prices[i]);
        console.log(`min-val:`, min);
        console.log('min-diff:', prices[i] - min);
        left[i] = Math.max(left[i - 1], prices[i] - min);
        console.log('after-init-left:', left);
        min = Math.min(min, prices[i]);
        console.log('min:', min);
        console.log('------------')
    }

    for (let i = len - 2, max = prices[len - 1]; i >= 0;i--) {
        right[i] = Math.max(right[i + 1], max - prices[i]);
        max = Math.max(max,prices[i]);
        profit = Math.max(profit,left[i] + right[i]);
    
    }
    return profit;
}

export default maxProfit_1;