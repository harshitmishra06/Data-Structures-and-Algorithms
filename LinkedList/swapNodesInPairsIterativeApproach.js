var swapPairs = function (head) {
  if (!head) return null;
  if (head.next === null) return head;
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;
  let curr = head;
  let third = head.next;

  while (curr !== null && third !== null) {
    prev.next = third;
    curr.next = third.next;
    third.next = curr;
    prev = curr;
    curr = prev.next;
    third = curr && curr.next;
  }
  return sentinel.next;
};
