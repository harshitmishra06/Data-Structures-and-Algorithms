// var maxFreqSum = function (s) {
//   let maxVowelFreq = 0;
//   let maxConsonantFreq = 0;
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i]) === true) {
//       map.set(s[i], map.get(s[i]) + 1);
//     } else {
//       map.set(s[i], 1);
//     }
//   }
//   for (let [key, value] of map) {
//     if (key == "a" || key == "e" || key == "i" || key == "o" || key == "u") {
//       if (value > maxVowelFreq) {
//         maxVowelFreq = value;
//       }
//     } else {
//       if (value > maxConsonantFreq) {
//         maxConsonantFreq = value;
//       }
//     }
//   }

//   return maxVowelFreq + maxConsonantFreq;
// };

/*-------------------------Using Set---------------------------*/
// var maxFreqSum = function (s) {
//   let vowels = new Set(["a", "e", "i", "o", "u"]);
//   let maxVowelFreq = 0;
//   let maxConsonantFreq = 0;
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i]) === true) {
//       map.set(s[i], map.get(s[i]) + 1);
//     } else {
//       map.set(s[i], 1);
//     }
//   }
//   for (let [key, value] of map) {
//     if (vowels.has(key)) {
//       if (value > maxVowelFreq) {
//         maxVowelFreq = value;
//       }
//     } else {
//       if (value > maxConsonantFreq) {
//         maxConsonantFreq = value;
//       }
//     }
//   }

//   return maxVowelFreq + maxConsonantFreq;
// };

/*----------------------------Method-3----------------------------------*/
// var maxFreqSum = function (s) {
//   let maxV = (maxC = 0);
//   let vowels = new Set(["a", "e", "i", "o", "u"]);
//   let map = new Map();
//   for (let char of s) {
//     map.set(char, (map.get(char) || 0) + 1);
//     if (vowels.has(char)) {
//     }
//   }
// };
// let res = maxFreqSum("harshit mishra");
// console.log(res);

/*--------------------------------------------------*/
var maxFreqSum = function (s) {
  let maxV = (maxC = 0);
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let map = new Map();
  for (let char of s) {
    let key = char;
    let value = map.get(key);
    if (map.has(key)) {
      map.set(key, value + 1);
    } else {
      map.set(key, 1);
    }
    console.log(map);

    value = map.get(key);

    if (vowels.has(key)) {
      maxV = Math.max(value, maxV);
    } else {
      maxC = Math.max(value, maxC);
    }
  }

  return maxV + maxC;
};
let res = maxFreqSum("successes");
console.log(res);
