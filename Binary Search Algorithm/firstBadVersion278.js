var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let l = 1;
    let r = n;
    while (l < r) {
      let m = l + Math.floor((r - l) / 2);
      if (isBadVersion(m)) {
        r = m;
      } else {
        l = m + 1;
      }
    }
    if (l === r) return l;
  };
};

// here r = m instead of r = m-1 is because what if m is the first bad version//

// while(l<=r){
//     when both pointers will move by 1
//     l=m+1
//     r=m-1;
// }

// ===========================================================

// while(l<r){
//     when only one pointer is moving by 1
//     l=m+1;
//     r=m;
// }

// ================================================================

// while(l+1<r)       or while(l<r-1)
// when no pointers move by 1
// l = m;
// r = m; 