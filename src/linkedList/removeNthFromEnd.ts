class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 删除链表的倒数第 N 个结点
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
 * @param head
 * @param n
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 1,2,3,4,5

  const dump = new ListNode(-1);
  dump.next = head;
  let cursor = dump;
  let cursor2 = dump;

  while (!!cursor?.next) {
    cursor = cursor.next;
    if (n === 0) {
      cursor2 = cursor2?.next!;
    } else {
      n--;
    }
  }

  cursor2.next = cursor2.next?.next ?? null;

  return dump.next;
}

console.log('-------------------begin--------------------res');
console.log(removeNthFromEnd(mockLinkedList([1]), 5));
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
