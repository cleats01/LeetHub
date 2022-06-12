/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    // 연속된 중복 없는 합
    let arr = [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!arr.includes(nums[i])) {
            arr.push(nums[i]);
        } else {
            max = Math.max(arr.reduce((a,c)=>a+c),max)
            arr = arr.slice(arr.indexOf(nums[i])+1,i)
            arr.push(nums[i]);
        }
    }
    max = Math.max(arr.reduce((a,c)=>a+c),max);
    return max;

};