var checkInclusion = function (s1, s2) {
  let hashW = Array(26).fill(0);
  let hashP = Array(26).fill(0);
  let window_length = s1.length;

  for (let i = 0; i < window_length; i++) {
    hashW[s2.charCodeAt(i) - 97]++;
    hashP[s1.charCodeAt(i) - 97]++;
  }

  let i = 0;
  let j = window_length - 1;
  while (j < s2.length) {
    if (isHashSame(hashW, hashP)) {
      return true;
    } else {
      hashW[s2.charCodeAt(i) - 97]--;
      i++;
      j++;
      hashW[s2.charCodeAt(j) - 97]++;
    }
  }
  return false;
};

var isHashSame = function (hashW, hashP) {
  for (let i = 0; i < 26; i++) {
    if (hashP[i] !== hashW[i]) {
      return false;
    }
  }
  return true;
};

// time complexity=O(n) or O(n*m);
// space complexity=O(1) or O(m); here m is harmless so we can say it is constant;