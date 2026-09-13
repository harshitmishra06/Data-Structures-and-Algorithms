var singleNonDuplicate = function (n) {
  let l = 0;
  let r = n.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (m % 2 === 0) {
      if (n[m] !== n[m + 1]) {
        r = m;
      } else {
        l = m + 2;
      }
    } else {
      if (n[m] !== n[m - 1]) {
        r = m;
      } else {
        l = m + 1;
      }
    }
  }
  return n[r];
};
