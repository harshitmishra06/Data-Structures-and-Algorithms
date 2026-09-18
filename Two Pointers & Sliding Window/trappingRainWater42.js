var trap = function (arr) {
  let l = 0;
  let r = arr.length - 1;
  let lMax = 0;
  let rMax = 0;
  let maxWater = 0;

  while (l < r) {
    if (arr[l] > arr[r]) {
      rMax = Math.max(arr[r], rMax);
      maxWater += rMax - arr[r];
      r--;
    } else {
      lMax = Math.max(arr[l], lMax);
      maxWater += lMax - arr[l];
      l++;
    }
  }
  return maxWater;
};
