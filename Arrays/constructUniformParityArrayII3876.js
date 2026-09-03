var uniformArray = function (nums1) {
  let minOdd = Infinity;
  let minEven = Infinity;

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] % 2 === 0) {
      minEven = Math.min(minEven, nums1[i]);
    } else {
      minOdd = Math.min(minOdd, nums1[i]);
    }
  }

  if (minOdd !== Infinity && minEven !== Infinity) {
    if (minEven < minOdd) {
      return false;
    }
  }

  return true;
};
