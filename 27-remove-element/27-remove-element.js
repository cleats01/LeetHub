/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.includes(val)) {
        nums.splice(nums.indexOf(val),1);
        removeElement(nums,val);
    } else {
        return nums.length
    }
};