var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  let sentinel = new ListNode();
  sentinel.next = head;
  let prev = sentinel;
  let curr = head;

  while (curr !== null) {
    if (curr.next && curr.val === curr.next.val) {
      let duplicate = curr.val;
      while (curr && curr.val === duplicate) {
        curr = curr.next;
      }
      prev.next = curr;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  return sentinel.next;

};



var deleteDuplicates = function (head) {
    if (!head || !head.next) return head;
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    let curr = head;
  
    while (curr !== null) {
      if (curr.next && curr.val === curr.next.val) {
        let duplicate = curr.val;
        while (curr && curr.val === duplicate) {
          curr = curr.next;
        }
        prev.next = curr;
      } else {
        prev = curr;
        curr = curr.next;
      }
    }
    return sentinel.next;
  };
  