class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 删除排序链表中的重复元素
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 * @param head
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  // const set = new Set<ListNode>();
  //   1,2,2,3,3,4
  //   1,2,3,4
  //  1,1,2
  //  1,1,1

  let cursor = head;
  while (!!cursor?.next) {
    if (cursor.val === cursor.next?.val) {
      cursor.next = cursor.next?.next;
    } else {
      cursor = cursor.next;
    }
  }

  return head;
}

console.log('-------------------begin--------------------res');
console.log(deleteDuplicates(mockLinkedList([1, 1, 1])));
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
