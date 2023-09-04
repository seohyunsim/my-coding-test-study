// 오답
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const answer = new ListNode();
  let pointer = answer;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      pointer.next = list1;
      list1 = list1.next;
    } else {
      pointer.next = list2;
      list2 = list2.next;
    }
    pointer = pointer.next;
  }

  if (list1) pointer.next = list1;
  else if (list2) pointer.next = list2;

  return answer.next;
};

// 정답
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const answer = new ListNode();
  let pointer = answer;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      pointer.next = list1;
      list1 = list1.next;
    } else {
      pointer.next = list2;
      list2 = list2.next;
    }
    pointer = pointer.next;
  }

  if (list1) pointer.next = list1;
  else if (list2) pointer.next = list2;

  return answer.next;
};
