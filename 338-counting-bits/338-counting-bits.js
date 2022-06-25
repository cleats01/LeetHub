/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    for (let i = 0; i <= n; i++) {
        ans.push(i.toString(2).split("").reduce((a,c)=>(+a)+(+c)))
    }
    return ans;
};