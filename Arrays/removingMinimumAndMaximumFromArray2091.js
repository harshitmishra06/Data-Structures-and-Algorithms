var minimumDeletions = function (nums) {
  let min = 0;
  let max = 0;
  let n = nums.length;
  for (i = 1; i < n; i++) {
    if (nums[i] < nums[min]) {
      min = i;
    }
    if (nums[i] > nums[max]) {
      max = i;
    }
  }
  let left = Math.min(min, max);
  let right = Math.max(min, max);
  let fromFront = right + 1;
  let fromBack = n - left;
  let fromBothSides = left + 1 + (n - right);
  return Math.min(fromFront, fromBack, fromBothSides);
};
