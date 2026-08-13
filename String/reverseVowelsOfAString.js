var reverseVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let arr = s.split("");
  console.log(arr);
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    if (vowels.has(arr[start]) && vowels.has(arr[end])) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    } else if (!vowels.has(arr[start])) {
      start++;
    } else {
      end--;
    }
  }
  return arr.join("");
};
let res = reverseVowels("IceCreAm");
console.log(res);
