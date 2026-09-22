var maxSlidingWindow = function (nums, k) {
  let i = 0;
  let j = 0;
  let ans = [];
  let max = nums[0];
  while (j < nums.length) {
    let wSize = j - i + 1;
    max = Math.max(max, nums[j]);
    if (wSize < k) {
      j++;
    } else if (wSize == k) {
      ans.push(max);

      if (nums[i] === max) {
        max = -Infinity;
        for (let h = i + 1; h <= j; h++) {
          max = Math.max(max, nums[h]);
        }
      }
      i++;
      j++;
    }
  }
  return ans;
};

// time complexity=O(n*k);
// space complexity=O(1); except ans Array;

/*-----------------For optimal solution we have to use dequeue to make====>Time complexity=O(n) & space complexity=O(k)------------*/

var maxSlidingWindow = function (nums, k) {
  let i = 0;
  let j = 0;
  let ans = [];
  let dQ = [];

  // dequeue always maintains max element in front aka monotonic decreasing dequeue

  while (j < nums.length) {
    while (dQ.length && nums[j] > dQ[dQ.length - 1]) {
      dQ.pop();
    }
    dQ.push(nums[j]);
    if (j >= k - 1) {
      ans.push(dQ[0]);

      //if the leftmost element for current window(nums[i]) is largest dQ[0],then remove it

      nums[i] === dQ[0] && dQ.shift();
      i++;
    }
    j++;
  }
  return ans;
};
