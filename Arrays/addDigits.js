// function addDigits(num) {
//   while (num >= 10) {
//     let result = 0;
//     let rem = 0;

//     while (num > 0) {
//       rem = num % 10;
//       result = result + rem;
//       num = Math.floor(num / 10);
//     }
//     num = result;
//   }
//   return num;
// }
// let val = addDigits(38);
// console.log(val);



// method 2 to make time complexity O(1)

function addDigits(num) {
    if (num === 0) return 0;
    return 1 + (num - 1) % 9;
}

let val = addDigits(38);
console.log(val); 