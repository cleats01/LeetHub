/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    return [...s].reverse().join("") === s ? 1 : 2;
};