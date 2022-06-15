/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    // 길이가 1씩 늘어나야하고
    // 전에 있던 알파벳 순서가 같아야함
    let memory = {}; 
    words.sort((a,b) => a.length - b.length)
    for (let word of words){
        var longest = 0; 
        for (let i = 0; i < word.length; i++){
            let pre = word.slice(0,i) + word.slice(i+1);
            longest = Math.max(longest, (memory[pre] || 0)+1)
        }
        memory[word] = longest
    }
    
    return Math.max(...Object.values(memory));
    
};