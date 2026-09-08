var guessNumber = function (n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let ans = guess(mid);
    if (ans == 0) return mid;
    else if (ans > 0) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
};
