// top-down approach

var searchBST = function (root, val) {
  let ans = null;

  let traverse = (curr) => {
    if (!curr) return [];
    if (curr.val === val) {
      ans = curr;
    } else {
      if (curr.val > val) {
        traverse(curr.left);
      } else {
        traverse(curr.right);
      }
    }
  };
  traverse(root);
  return ans;
};

// ------------------Bottom-up Approach---------------------------------

var searchBST = function (root, val) {
  if (!root || root.val === val) return root;

  return root.val < val
    ? searchBST(root.right, val)
    : searchBST(root.left, val);
};
