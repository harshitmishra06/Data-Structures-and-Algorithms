var isPalindrome = function (s) {
  s = s.toLowerCase();
  console.log(s);
  let filteredString = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i].match(/[a-z0-9]/i)) {
      filteredString += s[i];
    }
  }
  if (filteredString == filteredString.split("").reverse().join(""))
    return true;
  else return false;
};

/*----------------------------Using two pointer-----------------------*/
var isPalindrome = function (s) {
  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!s[left].match(/[a-z0-9]/i)) {
      left++;
    } else if (!s[right].match(/[a-z0-9]/i)) {
      right--;
    } else {
      if (s[left] !== s[right]) {
        return false;
      }

      left++;
      right--;
    }
  }

  return true;
};
