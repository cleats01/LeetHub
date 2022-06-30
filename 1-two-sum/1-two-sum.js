/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 해시 풀이
    let ans;
    let map = new Map();
    
    nums.forEach((num,i)=>{
        if (map.get(num) === undefined) map.set(target-num, i);
        else ans = [map.get(num), i];
    })
    
    return ans;
};