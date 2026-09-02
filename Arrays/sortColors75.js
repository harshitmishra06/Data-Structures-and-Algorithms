var sortColors = function (nums) {
  let first = 0;
  let mid = 0;
  let last = nums.length - 1;
  while (mid <= last) {
    if (nums[mid] == 0) {
      [nums[first], nums[mid]] = [nums[mid], nums[first]];
      first++;
      mid++;
    } else if (nums[mid] == 1) {
      mid++;
    } else {
      [nums[last], nums[mid]] = [nums[mid], nums[last]];
      last--;
      mid++;
    }
  }
};
