/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 투 포인터
    let start = 0;
    let end = numbers.length-1;
    while (true) {
        let sum = numbers[start]+numbers[end];
        if (sum === target) {
            return [start+1,end+1];
        } else if (sum < target) {
            start += 1;
        } else {
            end -= 1;
        }
    }
    
};