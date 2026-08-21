// var isIsomorphic = function(s, t) {
//     if(s.length!==t.length) return false;
//     let map=new Map();

//     for(let char of s){
//         if(!map.has(char)){
//             map.set(char,1)
//         }
//         else{
//             map.set(char,map.get(char)+1)
//         }
//     }
//   for(let char of t)
// };

/*------------------using two maps---------------------------*/
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let mapS = new Map();
  let mapT = new Map();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    if (mapS.has(charS) && mapS.get(charS) !== charT) {
      return false;
    }

    if (mapT.has(charT) && mapT.get(charT) !== charS) {
      return false;
    }

    mapS.set(charS, charT);
    mapT.set(charT, charS);
  }

  return true;
};

/*---------------Using one set and one map--------------*/

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // s character already has a mapping
    if (map.has(charS)) {
      if (map.get(charS) !== charT) {
        return false;
      }
    } else {
      // t character is already mapped to another s character
      if (set.has(charT)) {
        return false;
      }

      map.set(charS, charT);
      set.add(charT);
    }
  }

  return true;
};
