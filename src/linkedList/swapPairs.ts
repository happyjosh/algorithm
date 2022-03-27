class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

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

/**
 * 两两交换链表中的节点
 * https://leetcode.com/problems/swap-nodes-in-pairs/submissions/
 * @param head
 */
function swapPairs(head: ListNode | null): ListNode | null {
  let pre = new ListNode(-1);
  pre.next = head;

  // Input:pre- 1->2->3->4
  // Output:pre- 2->1->4->3

  const start = pre;

  while (!!pre.next && !!pre.next?.next) {
    const a = pre.next;
    const b = pre.next.next;
    const c = b.next;

    pre.next = b;
    b.next = a;
    a.next = c;

    pre = a;
  }

  return start.next;
}

console.log('-------------------begin--------------------res');
console.log(swapPairs(mockLinkedList([1, 2, 3, 4])));
console.log('-------------------end--------------------');

//---------------------------------------

/**
 * 递归的方式
 * @param head
 */
function swapPairs_2(head: ListNode | null): ListNode | null {
  // Input:pre- 1->2->3->4
  // Output:pre- 2->1->4->3

  let pre = new ListNode(-1);
  pre.next = head;

  subSwap(pre);

  return pre.next;
}

function subSwap(pre: ListNode) {
  const a = pre.next;

  if (!a) {
    return;
  }

  const b = a.next;

  if (!b) {
    return;
  }
  const c = b.next;

  pre.next = b;
  b.next = a;
  a.next = c;

  subSwap(a);
}
