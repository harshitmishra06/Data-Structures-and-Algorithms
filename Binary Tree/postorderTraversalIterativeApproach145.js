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


