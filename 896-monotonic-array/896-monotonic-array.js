/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let result = true;
    if (Math.max(...nums)===nums.at(-1)) {
        nums.forEach((e,i)=>{
            if (e>nums[i+1]) result = false;
        })
    } else if (Math.max(...nums)===nums.at(0)) {
        nums.forEach((e,i)=>{
            if (e<nums[i+1]) result = false;
        })
    } else {
        return false;
    }
    return result;
};