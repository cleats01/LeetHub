/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length-1;
    while(start<=end) {
        let middle = parseInt((start+end)/2);
        if (target > nums[middle]) {
            start = middle + 1;
        }
        if (target < nums[middle]) {
            end = middle - 1;
        }
        if (target === nums[middle]) {
            return middle;
        }
    }
    return -1;
};