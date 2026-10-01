//-----------Using DFS(recursion)-----------------

var maxDepth = function (root) {
    let maxDepth = 0;

    function traversal(curr, depth) {
        if (!curr) return
        maxDepth = Math.max(maxDepth, depth);
        traversal(curr.left, depth + 1);
        traversal(curr.right, depth + 1);
    };
    traversal(root, 1);
    return maxDepth;
};



//---------------Using BFS--(bottom-up approach)------------------------

var maxDepth = function (root) {
    if (!root) return 0;
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);

    return 1 + Math.max(leftMax, rightMax);
};