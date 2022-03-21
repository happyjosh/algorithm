class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * 合并两个有序链表
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * @param list1
 * @param list2
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const start = new ListNode(-1);
  let newNode = start;

  // 输入：l1 = [2,4], l2 = [1,3,4]
  // 输出：[1,1,2,3,4,4]
  while (!!list1 && !!list2) {
    if (list1.val <= list2.val) {
      newNode.next = list1;
      list1 = list1.next;
    } else {
      newNode.next = list2;
      list2 = list2.next;
    }
    newNode = newNode.next;
  }

  newNode.next = list1 || list2;

  return start.next;
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

console.log('-------------------begin--------------------');
console.log(
  mergeTwoLists(mockLinkedList([1, 2, 4]), mockLinkedList([1, 3, 4]))
);
console.log('-------------------end--------------------');
