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
 * 相交链表
 * （节点相同代表节点后续节点完全一致）
 * https://leetcode.com/problems/intersection-of-two-linked-lists/submissions/
 * @param headA
 * @param headB
 */
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  const set = new Set<ListNode>();

  let aCursor = headA;
  while (!!aCursor) {
    set.add(aCursor);
    aCursor = aCursor.next;
  }

  let bCursor = headB;
  while (!!bCursor) {
    if (set.has(bCursor)) {
      return bCursor;
    }
    bCursor = bCursor.next;
  }

  return null;
}

/**
 * 双指针方式
 * （a+c+b=b+c+a）
 * c为公共部分，a、b分别为各自的差异部分。若无公共部分c = 0
 * @param headA
 * @param headB
 */
function getIntersectionNode_2(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null || headB === null) {
    return null;
  }

  let cursorA: ListNode | null = headA;
  let cursorB: ListNode | null = headB;

  while (cursorA != cursorB) {
    // 要保留null，跳出循环
    cursorA = cursorA === null ? headB : cursorA.next;
    cursorB = cursorB === null ? headA : cursorB.next;
  }

  return cursorA;
}
