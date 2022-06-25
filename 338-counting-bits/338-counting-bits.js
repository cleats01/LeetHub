/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    for (let i = 0; i <= n; i++) {
        let arr = i.toString(2).split("")
        let b = arr.reduce((a,c)=>(+a)+(+c))
        ans.push(b)
    }
    return ans;
};