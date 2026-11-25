var subsets = function (nums) {
  let result = [];

  var backtrack = function (path, start) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  return result;
};
