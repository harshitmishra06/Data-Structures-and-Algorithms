var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let length = 0;
    let curr = head;
    let prev = sentinel;
    while (curr !== null) {
        curr = curr.next
        length++;
    }
    
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next
    return sentinel.next;
};
