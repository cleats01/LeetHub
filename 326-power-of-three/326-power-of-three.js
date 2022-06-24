/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n<=1) return n===1
    return isPowerOfThree(n/3);
};