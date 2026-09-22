/*--------------Using Map-----------------------*/
var characterReplacement = function (s, k) {
  let i = 0;
  let j = 0;
  let map = new Map();
  map.set(s[0], 1);
  let maxWindow = 0;
  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      j++;
      if (map.has(s[j])) {
        map.set(s[j], map.get(s[j]) + 1);
      } else {
        map.set(s[j], 1);
      }
    } else {
      map.set(s[i], map.get(s[i]) - 1);
      i++;
    }
  }
  return maxWindow;
};

var isWindowValid = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(i + 65);
    if (map.has(char)) {
      totalCount += map.get(char);
      maxCount = Math.max(maxCount, map.get(char));
    }
  }
  return totalCount - maxCount <= k;
};

/*---------------------Using Array-------------------------------------*/

var characterReplacement = function (s, k) {
  let i = 0;
  let j = 0;
  let arr = Array(26).fill(0);
  arr[s[0].charCodeAt(0) - 65] = 1;
  let maxWindow = 0;
  while (j < s.length) {
    if (isWindowValid(arr, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      j++;
      arr[s.charCodeAt(j) - 65]++;
    } else {
      arr[s.charCodeAt(i) - 65]--;
      i++;
    }
  }
  return maxWindow;
};

var isWindowValid = function (arr, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    totalCount += arr[i];
    maxCount = Math.max(maxCount, arr[i]);
  }
  return totalCount - maxCount <= k;
};


// time complexity=O(n*m)=O(n); m=26
// space complexity=O(m)