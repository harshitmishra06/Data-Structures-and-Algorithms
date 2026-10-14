// A "good node" in a binary tree is a node whose value is greater than or equal to every other node's value along the path from the root down to that node

// Solving this by  using top-down approach

var goodNodes = function (root) {
  let goodNodesCount = 0;

  let traverse = (curr, maxSeenSoFar) => {
    if (curr.val >= maxSeenSoFar) {
      goodNodesCount++;
    }
    let currMax = Math.max(maxSeenSoFar, curr.val);
    curr.left && traverse(curr.left, currMax);
    curr.right && traverse(curr.right, currMax);
  };
  traverse(root, -Infinity);
  return goodNodesCount;
};
