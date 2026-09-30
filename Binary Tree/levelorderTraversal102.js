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

