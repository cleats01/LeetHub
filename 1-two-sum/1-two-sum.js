/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
    nums.forEach((num1,i)=>{
        for (let j = i+1; j < nums.length; j++) {
            if (num1 + nums[j] === target) result.push(i,j);
        }
    })
    return result;
};