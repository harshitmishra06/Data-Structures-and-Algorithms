var hasCycle = function (head) {
  let curr = head;
  const set = new Set();

  while (curr !== null) {
    if (set.has(curr)) return true;
    else {
      set.add(curr);
      curr = curr.next;
    }
  }
  return false;
};
