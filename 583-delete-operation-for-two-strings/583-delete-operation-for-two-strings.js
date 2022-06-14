/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(W1, W2) {
    // 최대로 겹치는 부분 찾기
    let m = W1.length, n = W2.length
    if (m < n) [W1, W2, m, n] = [W2, W1, n, m]
    let arr1 = W1.split(""), arr2 = W2.split("")
    let dpLast = new Uint16Array(n + 1),
        dpCurr = new Uint16Array(n + 1)
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) 
            dpCurr[j+1] = (arr1[i] === arr2[j]) 
                ? dpLast[j] + 1 
                : Math.max(dpCurr[j], dpLast[j+1]);
        [dpLast, dpCurr] = [dpCurr, dpLast]
    }
    
    return m + n - 2 * dpLast[n] 
};