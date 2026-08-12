var lengthOfLastWord = function (s) {
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") continue;
    while (s[i] !== " " && i >= 0) {
      length++;
      i--;
    }
    return length;
  }
};

/*------------------------------*/
var lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");
  return s[s.length - 1].length;
};

/*--------------Method 2--------------------*/

var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  while (n > 0) {
    if (s[n] == " ") {
      --n;
    } else {
      break;
    }
  }
  let count = 0;
  while (n > 0) {
    if (s[n] !== " ") {
      --n;
      ++count;
    } else {
      break;
    }
  }
  return count;
};

/*-----------Method 3-------------------*/

var lengthOfLastWord = function (s) {
  let length = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " " && length === 0) continue;
    else {
      if (s[i] === " ") {
        return length;
      } else length++;
    }
  }
  return length;
};


/*-------------Method 4------------------------------*/

