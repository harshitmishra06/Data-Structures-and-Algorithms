// function reverseNumber(num) {
//   let copy = num;
//   let rem = 0;
//   let result = 0;

//   num = Math.abs(num);

//   while (num > 0) {
//     rem = num % 10;
//     result = result * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   let limit = Math.pow(2, 31);
//   if (result < -limit || result > limit - 1) return 0;
//   return copy < 0 ? -result : result;
// }
// let res = reverseNumber(-1578907899);
// console.log(res);

