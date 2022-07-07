/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let list = head;
    while (list!==null) {
        arr.push(list.val);
        list = list.next;
    }
    while (arr.length>1) {
        if (arr[0]===arr[arr.length-1]) {
            arr.pop();
            arr.shift();
        } else {
            return false;
        }
    }
    return true
};