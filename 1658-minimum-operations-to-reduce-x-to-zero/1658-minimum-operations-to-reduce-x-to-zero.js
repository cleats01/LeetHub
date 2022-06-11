/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let target = nums.reduce((s,c)=>s+c,0)-x;
    if (target < 0) return -1;
    if (target === 0) return nums.length;
    
    let l = 0, window = 0, max = -1;
    for (let i = 0; i < nums.length; i++) {
        window += nums[i];
        while(window > target) window -= nums[l++];
        if(window === target) max = Math.max(max, i-l+1);
    }
    
    return max === -1 ? max : nums.length-max;
    
};