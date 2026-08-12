var maxFreqSum = function (s) {
  let maxVowelFreq = 0;
  let maxConsonantFreq = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) === true) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  for (let [key, value] of map) {
    if (key == "a" || key == "e" || key == "i" || key == "o" || key == "u") {
      if (value > maxVowelFreq) {
        maxVowelFreq = value;
      }
    } else {
      if (value > maxConsonantFreq) {
        maxConsonantFreq = value;
      }
    }
  }

  return maxVowelFreq + maxConsonantFreq;
};
