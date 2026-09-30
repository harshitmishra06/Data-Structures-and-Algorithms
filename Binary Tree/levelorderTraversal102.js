// Using Queue

var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let ans = [];

  while (queue.length) {
    let levelArr = [];
    let levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = queue.shift();
      curr.left && queue.push(curr.left);
      curr.right && queue.push(curr.right);
      levelArr.push(curr.val);
    }
    ans.push(levelArr);
  }
  return ans;
};

/*-----------------------------------------------------------------------------------------*/

// Recursive Approach

var levelOrder = function (root) {
  let ans = [];

  function traversal(curr, level) {
    if (!curr) return;
    if (!ans[level]) {
      ans[level] = [];
    }
    ans[level].push(curr.val);
    traversal(curr.left, level + 1);
    traversal(curr.right, level + 1);
  }
  traversal(root, 0);
  return ans;
};
