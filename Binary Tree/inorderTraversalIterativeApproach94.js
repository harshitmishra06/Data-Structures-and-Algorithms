var inorderTraversal = function (root) {
  if (!root) return [];
  let curr = root;
  let stack = [];
  let ans = [];

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
  return ans;
};
