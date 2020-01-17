/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let l3 = new ListNode();
  let curr = l3;
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next;
    } else {
      curr.next = l2
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return l3.next
};