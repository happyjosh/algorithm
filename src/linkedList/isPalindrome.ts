class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 回文链表
 * https://leetcode.com/problems/palindrome-linked-list/
 * 找出中点，分割链表，对一部分反向，然后逐个对比
 * @param head
 */
function isPalindrome(head: ListNode | null): boolean {
  //    1 2 2 1
  //    1 2 1
  //    1 2 3

  let cursor1: ListNode | null = head;
  let cursor2: ListNode | null = head?.next ?? null;

  let mid: ListNode | null = null;

  while (!!cursor1 && !!cursor2) {
    if (!cursor2.next?.next) {
      mid = cursor1;

      break;
    }

    cursor1 = cursor1.next;
    cursor2 = cursor2.next.next;
  }

  if (!mid) {
    return true;
  }

  cursor1 = head;
  cursor2 = reverseList(mid.next);

  mid.next = null;

  // 基数状态1会比2多一个，按2的数量比较
  while (!!cursor2 && !!cursor1) {
    if (cursor1.val !== cursor2.val) {
      return false;
    }

    cursor1 = cursor1.next;
    cursor2 = cursor2.next;
  }

  return true;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let pre = null;
  let cursor: ListNode | null = head;

  while (!!cursor) {
    const next: ListNode | null = cursor.next;
    cursor.next = pre;
    pre = cursor;
    cursor = next;
  }

  return pre;
}

console.log('-------------------begin--------------------');
console.log(isPalindrome(mockLinkedList([1, 2, 2, 1])));
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
