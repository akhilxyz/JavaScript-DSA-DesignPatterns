// You are given an array prices where prices[i] is the price of a given stock on the ith day.//-
//-
// You want to maximize your profit by choosing a single day to buy one stock and choosing//-
//  a different day in the future to sell that stock.//-
//-
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.//-
//-
// Example 1://-
//-
// Input: prices = [7,1,5,3,6,4]//-
// Output: 5//-
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.//-
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.//-
// Example 2://-
//-
// Input: prices = [7,6,4,3,1]//-
// Output: 0//-
// Explanation: In this case, no transactions are done and the max profit = 0.//

/**
 * Function to calculate the maximum profit that can be achieved by buying and selling a single stock once.
 * @param {number[]} prices - An array of prices of a stock on each day.
 * @returns {number} The maximum profit that can be achieved by buying and selling a single stock once.
 * @description This function iterates through the given array of stock prices and keeps track of the minimum price seen so far and the maximum profit that can be achieved. It calculates the profit if sold at each current price and updates the minimum price if the current price is lower. Finally, it returns the maximum profit that can be achieved.
 * @complexity
 * Time Complexity: 
 * 𝑂 (𝑛)
 * O(n), since we’re iterating through the array once.
 * Space Complexity: 
 * 𝑂 (1)
 * O(1), as we’re only using a couple of extra variables (minPrice and maxProfit).
 */
const maxProfit = (prices) => {
    let minPrice = prices[0];  // Buy at minimum price seen so far
    let maxProfit = 0;         // Track max profit

    for (let i = 1; i < prices.length; i++) {
      // Calculate profit if sold at current price
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
      // Update minimum price if current price is lower
      minPrice = Math.min(minPrice, prices[i]);
    }

    return maxProfit;
  };