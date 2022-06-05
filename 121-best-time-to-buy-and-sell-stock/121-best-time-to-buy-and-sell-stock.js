/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let cheapest = prices[0]
    prices.forEach((el)=>{
        if (el < cheapest) cheapest = el;
        profit = Math.max(profit, el-cheapest);
    })
    return profit;
};