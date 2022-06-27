/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let cnt = 0;
    for (let i = 0; i < nums.length;) {
        if (nums[i]===0) {
            nums.splice(i,1);
            cnt ++;
        } else i++;
    }
    for (let i = 0; i < cnt; i++ ) {
        nums.push(0);
    }
};