var isSubsequence = function (s, t) {
  if (s == "") return true;
  let first = 0;
  let second = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[first] && s[first] === t[second]) {
      first++;
      second++;

      if (first === s.length) {
        return true;
      }
    } else {
      second++;
    }
  }
  return false;
};
