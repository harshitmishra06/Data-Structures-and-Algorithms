var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let slow = sentinel;
    let fast = sentinel;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return sentinel.next;
};