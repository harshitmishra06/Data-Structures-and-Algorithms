// Preorder traversal approach will not work as it does not take the null values because of which structure can be different

// by doing it recursively time-compexity will be O(n*m) and space-complecity will be O(n+m) so we won't do it in that way

// We will solve it using hashmap(serialisation) and de-limiter as string and also it will track null values so the structure will remain same and de-limiter btw nodes is used to solve the corner case.
// De-limiter can be any special character which can be used to distinguish btw nodes.
// in this time-complexity of O(n);

var isSubtree = function (root, subRoot) {
  let hashRoot = serialize(root);
  let hashSubRoot = serialize(subRoot);

  console.log(hashRoot);
  console.log(hashSubRoot);

  // find out hashSubRoot is a substring of hashRoot(KMP String matching algo can be used)

  return hashRoot.includes(hashSubRoot);
};

let serialize = function (root) {
  let hash = "";

  let traverse = (curr) => {
    if (!curr) {
      hash = hash + "#-";
      return;
    }
    hash = hash + "-" + curr.val;
    traverse(curr.left);
    traverse(curr.right);
  };
  traverse(root);
  return hash;
};
