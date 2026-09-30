// Iterative Approach using two stack

var postorderTraversal = function (root) {
  if (!root) return [];
  let ans = [];
  let s1 = [root];
  let s2 = [];

  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr.val);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }
  while (s2.length) {
    ans.push(s2.pop());
  }
  return ans;
};

// ---------------------------------------------------------------------------------------------------------

// Iterative Approach using one stack

var postorderTraversal = function (root) {
  let stack = [];
  let ans = [];
  let curr = root;
  let lastVisitedNode = null;

  while (curr || stack.length) {
    // push all the values to stack till I reach the leftmost bottom
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    let peekNode = stack[stack.length - 1];
    // if right exits & it is not the last visited
    if (peekNode.right && peekNode.right !== lastVisitedNode) {
      curr = peekNode.right;
    } else {
      ans.push(peekNode.val);
      lastVisitedNode = stack.pop();
    }
  }
  return ans;
};
