// Bottom-Up Approach 

var maxPathSum = function (root) {
  let maxPathSum = -Infinity;

  let traverse = (curr) => {
    if (!curr) return 0;
    let maxLeft = Math.max(0, traverse(curr.left));
    let maxRight = Math.max(0, traverse(curr.right));

    let currMax = curr.val + maxLeft + maxRight;
    maxPathSum = Math.max(currMax, maxPathSum);

    return curr.val + Math.max(maxLeft, maxRight);
  };
  traverse(root);
  return maxPathSum;
};

