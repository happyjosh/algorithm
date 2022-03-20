class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 反转链表
 * https://leetcode.com/problems/reverse-linked-list/submissions/
 * @param head
 */
function reverseList(head: ListNode | null): ListNode | null {
  // 1,2,3,4,5
  // 5,4,3,2,1

  if (!head) {
    return null;
  }

  let cursor = head;
  let next = head.next;

  while (!!next) {
    let pre = cursor;
    cursor = next;
    next = next?.next;
    cursor.next = pre;
  }

  head.next = null;

  return cursor;
}
//mock 链表数据
const nodes = [1, 2, 3, 4, 5].map((item) => new ListNode(item));
nodes.forEach((item, index) => {
  if (index === nodes.length - 1) {
    return;
  }
  item.next = nodes[index + 1];
});
// nodes[nodes.length - 1].next = nodes[1];

console.log('-------------------begin--------------------res');
console.log(reverseList(nodes[0]));
console.log('-------------------end--------------------');
