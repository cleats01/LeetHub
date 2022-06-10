/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 다른 알파벳으로 이뤄진 문자열의 최대 길이
    // Sliding window
    
    let start = 0;
    let max = '';
    for (let i=0; i<s.length; i++) {
        if (s.slice(start,i).includes(s[i])){
            start = s.indexOf(s[i],start)+1;
        } else if(max.length < s.slice(start, i+1).length){
            max = s.slice(start, i+1);
        }
    }
    
    return max.length
};