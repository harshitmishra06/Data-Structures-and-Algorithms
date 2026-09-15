var getIntersectionNode = function (headA, headB) {
  let n = 0;
  let pA = headA;
  while (pA) {
    n++;
    pA = pA.next;
  }

  let m = 0;
  let pB = headB;
  while (pB) {
    m++;
    pB = pB.next;
  }

  let diff = Math.abs(n - m);
  if (n > m) {
    [headA, headB] = [headB, headA];
  }
  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }
  pA = headA;
  pB = headB;
  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};

/*----------------------------------------------------------------------------------*/

