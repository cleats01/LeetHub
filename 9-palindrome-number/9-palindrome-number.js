/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x<0) return false;
    x = String(x);
    let left = 0;
    let right = x.length-1;
    for (let i = 0; i<=Math.floor((x.length-1)/2); i++) {
        if (x[left]===x[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true
    
};