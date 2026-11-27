var combinationSum2 = function (arr, target) {
  let result = [];
  arr.sort((a, b) => a - b);

  var backtrack = function (path, remSum, start) {
    if (remSum === 0) result.push([...path]);
    if (remSum < 0) return;

    for (let i = start; i < arr.length && arr[i] <= remSum; i++) {
      if (i > start && arr[i - 1] === arr[i]) continue;
      path.push(arr[i]);
      backtrack(path, remSum - arr[i], i + 1);
      path.pop();
    }
  };
  backtrack([], target, 0);
  return result;
};



// Time - Complexity = O(2^n).
// Space - Complexity = O(n).
