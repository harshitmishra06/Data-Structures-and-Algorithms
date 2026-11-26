var combinationSum = function (arr, target) {
  let result = [];

  var backtrack = function (path, remSum, start) {
    if (remSum === 0) result.push([...path]);
    if (remSum < 0) return;

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(path, remSum - arr[i], i);
      path.pop();
    }
  };
  backtrack([], target, 0);
  return result;
};



// Depth of tree = targetSum(T)/(M)min val in arr

// Time-Complexity =O(n^T/m +1).
// Space-Complexity = O(T/M).