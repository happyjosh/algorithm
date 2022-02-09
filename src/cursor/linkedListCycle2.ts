// /**
//  * 快慢指针
//  * https://leetcode.com/problems/linked-list-cycle-ii/
//  */
// function detectCycle(head: ListNode | null): ListNode | null {
//   let slow: ListNode | null = head;
//   let fast: ListNode | null = head;
//   do {
//     if (!fast || !fast.next) {
//       return null;
//     }
//     slow = slow?.next ?? null;
//     fast = fast?.next.next;
//   } while (fast !== slow);
//
//   fast = head;
//   while (fast !== slow) {
//     slow = slow?.next??null;
//     fast = fast?.next??null;
//   }
//
//   return fast;
// }

/**
 * hashset的方式
 * https://leetcode.com/problems/linked-list-cycle-ii/
 * @param head
 */
function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  const visited = new Set<ListNode>();
  let cursor = head;
  visited.add(cursor);
  while (cursor.next) {
    cursor = cursor.next;
    if (visited.has(cursor)) {
      return cursor;
    }
    visited.add(cursor);
  }

  return null;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

//mock 链表数据
const nodes = [3, 2, 0, -4].map((item) => new ListNode(item));
nodes.forEach((item, index) => {
  if (index === nodes.length - 1) {
    return;
  }
  item.next = nodes[index + 1];
});
nodes[nodes.length - 1].next = nodes[1];

console.log('-------------------begin--------------------');
console.log(detectCycle(nodes[0]));
console.log('-------------------end--------------------');
