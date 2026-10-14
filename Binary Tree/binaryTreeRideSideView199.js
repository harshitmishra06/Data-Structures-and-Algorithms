// write a code to see the visible part of tree if one is stading in right side

var rightSideView = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];

  while (q.length) {
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      // push only first node at each level
      i == 0 && ans.push(curr.val);
      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
    }
  }
  return ans;
};
