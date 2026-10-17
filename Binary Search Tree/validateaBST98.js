// We have solved this ques in the same function  (we can also do it by creating different function . it wont affect time and space complexity)

var isValidBST = function (curr, lo = null, hi = null) {
  if (!curr) return true;
  if ((lo != null && curr.val <= lo) || (hi != null && curr.val >= hi)) {
    return false;
  }

  let isLeftBST = isValidBST(curr.left, lo, curr.val);
  let isRightBSt = isValidBST(curr.right, curr.val, hi);

  return isLeftBST && isRightBSt;
};


// Time-complexity:- O(n);
// Space-complexity:- O(n);