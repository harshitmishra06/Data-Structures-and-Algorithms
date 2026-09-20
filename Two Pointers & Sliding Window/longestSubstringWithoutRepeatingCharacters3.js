// When ever there is to find subsrting use sliding window

var lengthOfLongestSubstring = function (s) {
  let maxWS = 0;
  let i = 0;
  let j = 0;
  let map = new Map();

  for (j = 0; j < s.length; j++) {
    if (map.has(s[j]) && map.get(s[j]) >= i) {
      i = map.get(s[j]) + 1;
    }
    map.set(s[j], j);
    currWS = j - i + 1;
    maxWS = Math.max(maxWS, currWS);
    
  }
  return maxWS;
};
