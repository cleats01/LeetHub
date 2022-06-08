/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // 선형 검색
    // if (nums[nums.length-1] < target) return nums.length;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] >= target) return i;
    // }
    
    /////////////////////////////////////////////////////////
    
    // 이진 검색 
    let start = 0;
    let end = nums.length;
    while (start < end) {
        let mid = Math.floor((start+end)/2);
        if (target > nums[mid]) {
            start = mid+1
        } else end = mid
    }
    return start
};