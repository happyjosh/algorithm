class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 奇偶链表
 * https://leetcode.com/problems/odd-even-linked-list/submissions/
 * @param head
 */
function oddEvenList(head: ListNode | null): ListNode | null {
  // [2,1,3,5,6,4,7]
  // [2,3,6,7,1,5,4]

  if (!head) {
    return head;
  }

  let cursor: ListNode = head;
  let cursor2 = head.next;
  let start2 = cursor2;

  while (!!cursor && cursor2?.next) {
    cursor.next = cursor2.next;
    cursor = cursor.next;
    cursor2.next = cursor.next;
    cursor2 = cursor2.next;
  }

  cursor.next = start2;

  return head;
}

console.log('-------------------begin--------------------res');
console.log(oddEvenList(mockLinkedList([1, 2, 3, 4, 5, 6])));
console.log('-------------------end--------------------');

function mockLinkedList(nums: number[]) {
  const nodes = nums.map((item) => new ListNode(item));
  nodes.forEach((item, index) => {
    if (index === nodes.length - 1) {
      return;
    }
    item.next = nodes[index + 1];
  });

  return nodes[0];
}
