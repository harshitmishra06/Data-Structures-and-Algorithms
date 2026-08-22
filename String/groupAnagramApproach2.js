var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) { // O(n)
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    for (let j = 0; j < s.length; j++) { // O(m)
      let index = s[j].charCodeAt() - "a".charCodeAt();
      freqArr[index]++;
    }
    let key = "";
    for (let k = 0; k < 26; k++) { // O(1)
      key = key + String.fromCharCode(k) + freqArr[k];
    }
    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }
  return [...Object.values(map)];
};

// time complexity --> O(n*m)