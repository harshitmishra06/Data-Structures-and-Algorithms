var combinationSum3 = function (k, n) {
  let result = [];

  var backtrack = function (path, start, remSum) {
    if (path.length === k && remSum === 0) {
      result.push([...path]);
      return;
    }

    if (remSum < 0) return;

    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(path, i + 1, remSum - i);
      path.pop();
    }
  };
  backtrack([], 1, n);
  return result;
};
