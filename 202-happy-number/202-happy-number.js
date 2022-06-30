/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    let ans = true;
    while (n !== 1) {
        let cur = 0;
        String(n).split("").forEach(s=> cur += (+s)**2)
        if (set.has(cur)) {
            ans = false;
            n = 1;
        } else {
            n = cur;
            set.add(cur);
        }
    }
    return ans;
};