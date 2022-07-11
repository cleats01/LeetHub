/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const legend = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const arr = s.split("");
    arr.forEach((e,i,arr)=>{
        if (legend[e]<legend[arr[i+1]]) {
            result -= legend[e];
        } else {
            result += legend[e];
        }
    })
    return result;
};