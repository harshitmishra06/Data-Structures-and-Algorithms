var longestCommonPrefix = function (strs) {
  let pointer = 0;
  while (pointer < strs[0].length) {
    let ch = strs[0][pointer];
    for (let i = 1; i < strs.length; i++) {
      if (pointer >= strs[i].length || ch !== strs[i][pointer]) {
        return strs[0].substring(0, pointer);
      }
    }
    pointer++;
  }
  return strs[0];
};
