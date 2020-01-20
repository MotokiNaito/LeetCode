/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (!head) {
    return false;
  }
  let hash = {};
  while (head) {
    if (hash[head.val]) {
      for (let i = 0; i < hash[head.val].length; i++) {
        if (head === hash[head.val][i]) {
          return true;
        }
      }
      hash[head.val].push(head);
    } else {
      hash[head.val] = [head];
    }
    head = head.next;
  }
  return false;
};

const hasCycle = (head) => {
  if (!head) {
    return false;
  }
  let fast = head;
  let slow = head;
  while (fast) {
    if (!fast.next) {
      return false;
    } else {
      fast = fast.next.next;
      slow = slow.next;
    }
    if (slow == fast) {
      return true;
    }
  }
  return false;
};