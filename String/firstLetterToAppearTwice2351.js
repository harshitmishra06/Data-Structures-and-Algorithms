var repeatedCharacter = function (s) {
  let set = new Set();
  for (let char of s) {
    if (set.has(char)) {
      return char;
    } else {
      set.add(char);
    }
  }
};
