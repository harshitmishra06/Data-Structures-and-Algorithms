// Most Important ques for interview

var lowestCommonAncestor = function (root, p, q) {
  let lca = null;

  let traverse = (curr) => {
    let count = 0;
    if (!curr) return 0;
    let ansOnLeft = traverse(curr.left);
    let ansOnRight = traverse(curr.right);

    if (curr === p || curr === q) {
      count++;
    }

    count += ansOnLeft + ansOnRight;
    if (count === 2 && !lca) {
      lca = curr;
    }
    return count;
  };
  traverse(root);
  return lca;
};


// Time-Complexity = O(n)