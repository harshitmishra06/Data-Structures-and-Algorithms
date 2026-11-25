var permute = function (nums) {
  let result = [];

  var backtrack = function (path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        backtrack(path);
        path.pop();
      }
    }
  };
  backtrack([]);
  return result;
};


// Formula to calculate Permutations = n! for n elements

// Time-Complexity = O(n.n!)
// Space-Complexity = O(n) without considering result array
// If we consider result it will be O(n.n!)