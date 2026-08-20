// var isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let map = new Map();
//   for (let char of s) {
//     if (!map.has(char)) {
//       map.set(char, 1);
//     } else {
//       map.set(char, map.get(char) + 1);
//     }
//   }
//   for (let char of t) {
//     if (map.get(char) > 1) map.set(char, map.get(char) - 1);
//     else map.delete(char);
//   }
//   return map.size === 0 ? true : false;
// };

/*-----------------------------------By using sorting method----------------------------------------------*/

var isAnagram = function (s, t) {
    return s.split("").sort().join("")===t.split("").sort().join("")
}