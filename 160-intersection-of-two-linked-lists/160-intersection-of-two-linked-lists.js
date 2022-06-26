/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;
    let linkA = headA;
    let linkB = headB;
    while (linkA != linkB) {
        linkA = (linkA === null) ? headB : linkA.next;
        linkB = (linkB === null) ? headA : linkB.next;
    }
    return linkA;
};