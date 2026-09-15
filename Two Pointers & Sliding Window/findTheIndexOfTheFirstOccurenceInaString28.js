/*----------------Using in-bulit string searching function of js------------------*/
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

/*-----------------Using Sliding Window-------------------------------*/

var strStr = function (haystack, needle) {
  let n = haystack.length - needle.length;
  for (let i = 0; i <= n; i++) {
    let j = 0;
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1;
};

/*------------------Using KMP Algorithm(Knuth-Morris Pott)String Matching Algorithm-------------------------------*/

var strStr = function (haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  let i = 0;
  let j = 1;
  let lps = [0];

  while (j < m) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i === 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }
  i = 0;
  j = 0;
  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[j - 1];
      }
    }
    if (j === m) {
      return i - m;
    }
  }
  return -1;
};
