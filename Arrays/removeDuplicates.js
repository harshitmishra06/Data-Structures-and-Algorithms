function removeDuplicate(nums) {
  let x = 0;

  if (nums.length <= 1) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      x = x + 1;
      nums[x] = nums[i];
    }
  }
  return x + 1;
}
let res = removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log(res);
