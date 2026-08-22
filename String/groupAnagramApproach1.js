var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) { // n 
    let sortedStrs = strs[i].split("").sort().join(""); // for this step time complexity will be- m log m
    if (!map[sortedStrs]) {
      map[sortedStrs] = [strs[i]];
    } else {
      map[sortedStrs].push(strs[i]);
    }
  }
  return [...Object.values(map)];
};
// for this whole the time complexity will be (n*m log m ).
// where n is ths number of strings and m is the max length of each string.
// Space complexity will be O(n m ).