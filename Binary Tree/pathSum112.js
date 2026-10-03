// Top-Down Approach:-

var hasPathSum = function (root, targetSum) {
  let ans = false;

  function traverse(curr, sum) {
    if (!curr) return 0;
    sum += curr.val;
    if (!curr.left && !curr.right) {
      if (sum === targetSum) {
        ans = ans || true;
      }
    }
    traverse(curr.left, sum);
    traverse(curr.right, sum);
  }
  traverse(root, 0);
  return ans;
};


// ----------------------Using Bottom-Up Approach-------------------------------------------

var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    targetSum -= root.val;
    if (!root.left && !root.right) {
      return targetSum === 0;
    }
  
    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
  };