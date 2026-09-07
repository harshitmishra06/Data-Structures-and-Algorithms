var mySqrt = function (x) {
  let i = 1;
  while (i * i <= x) {
    if (i * i < x) {
      i++;
    } else if (i * i == x) {
      return i;
    }
  }
  return i - 1;
};

/*---------------Using binary search-------------------------------------*/

var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 2;
  let right = Math.floor(x / 2);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (x == mid * mid) return mid;
    else if (x > mid * mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (right < left) return right;
};

// time complexity==O(logn)

// Other way of calculating middle element == left +[(right-left)/2]
