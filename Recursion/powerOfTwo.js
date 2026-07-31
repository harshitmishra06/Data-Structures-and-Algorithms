// function powerOfTwo(n) {
//   if (n === 1) return true;
//   else if (n < 1) return false;
//   else {
//     return powerOfTwo(n / 2);
//   }
// }
// let val = powerOfTwo(4);
// console.log(val);



// function powerOfTwo(n) {
//     // if (n === 1) return true;
    // if (n < 1) return false;
    // const x=Math.round(Math.log2(n));
    // return Math.pow(2,x)===n;
    
//     }
  
//   let val = powerOfTwo(4);
//   console.log(val);
  




function powerOfTwo(n) {
    if (n < 1) return false;
  
    for (let x = 0; Math.pow(2, x) <= n; x++) {
      if (n === Math.pow(2, x)) return true;
    }
    return false;
  }
  
  console.log(powerOfTwo(4));  // true
  console.log(powerOfTwo(5));  // false
