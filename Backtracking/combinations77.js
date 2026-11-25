var combine = function (n, k) {
  let result = [];

  var backtrack = function (path, start) {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 1);
  return result;
};


// Time-Complexity = O(k.no of combinations)
// Space-complexity = O(k)

// formula to calculate no of combinations = n!/k!.(n-k)!