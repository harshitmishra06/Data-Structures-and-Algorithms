var nextGreaterElements = function (nums) {
  let arr = [...nums, ...nums];
  let stack = [];
  let n = arr.length;
  let l = nums.length;
  let ans = Array(n).fill(-1);
  stack.push(arr[n - 1]);
  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      if (arr[i] < stack[stack.length - 1]) {
        ans[i] = stack[stack.length - 1];
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }
  return ans.slice(0, l);
};
