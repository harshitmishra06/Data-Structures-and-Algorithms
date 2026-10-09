// Recursive Approach

var zigzagLevelOrder = function (root) {
  let ans = [];

  var bfs = function (curr, level) {
    if (!curr) return;
    if (!ans[level]) {
      ans[level] = [];
    }

    if (level % 2 === 0) {
      ans[level].push(curr.val);
    } else {
      ans[level].unshift(curr.val);
    }
    bfs(curr.left, level + 1);
    bfs(curr.right, level + 1);
  };
  bfs(root, 0);
  return ans;
};

// Time complexity=O(n^2) because of unshift

// ----------------------Iterative Approach---------------------------------------

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  let level = 0;

  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
      levelArr.push(curr.val);
    }
    if (level % 2 === 1) {
      levelArr.reverse();
    }

    ans.push(levelArr);
    level++;
  }
  return ans;
};

// Time complexity= O(n^2) in js because of q.shift opeartion

// ---------------Iterative and optimized approach using indexed queue---------------------------------

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let ans = [];
  let level = 0;
  let front = 0;

  while (front < q.length) {
    let levelArr = [];
    let levelSize = q.length - front;
    for (let i = 0; i < levelSize; i++) {
      let curr = q[front++];

      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
      levelArr.push(curr.val);
    }
    if (level % 2 === 1) {
      levelArr.reverse();
    }

    ans.push(levelArr);
    level++;
  }
  return ans;
};


// Time complexity = O(n)