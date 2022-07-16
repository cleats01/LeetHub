/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    nums.forEach(e=>{
        obj[e] = (obj[e] === undefined) ? 1 : obj[e]+1;
    })
    return Object.keys(obj).find(key => obj[key] === 1);
};