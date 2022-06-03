/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let result = new Array(matrix[0].length);
    matrix.forEach((arr,i)=>{
        arr.forEach((el,j)=>{
            result[j] = result[j] || [];
            result[j][i] = el;
        })
    })
    return result;
};