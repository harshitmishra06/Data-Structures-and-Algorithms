var maxPower = function (s) {
  let count = 1;
  let maxCount = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i -1]) {
      count++;
      if (maxCount < count) {
        maxCount = count;
      }
    } else count = 1;
  }
  return maxCount;
};



