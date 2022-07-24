/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let list = head;
    if (list === null) return head;
    while (list.next !== null) {
        if (list.next.val === list.val) {
            list.next = list.next.next;
            continue;
        }
        if (list.next !== null) list = list.next;
    }
    return head;
};