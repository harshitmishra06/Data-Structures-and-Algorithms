// Approach -: Inorder treversal approach

var kthSmallest = function (root, k) {
  let ans = null;
  let count = k;

  let traverse = (curr) => {
    if(ans!=null) return;
    curr.left && traverse(curr.left);
    count--;
    if (count === 0) {
      ans = curr.val;
    }
    curr.right && traverse(curr.right);
  };
  traverse(root);
  return ans;
};


// Time-Complexity = O(n)