// function palindrome(num){
//     let copy=num;
//     let rem=0;
//     let result=0;
//     while(num>0){
//         rem=num%10;
//         result=result*10 +rem;
//         num=Math.floor(num/10);

//     }
    
//     if(copy==result){
//         return "Num is Palindrome"
//     }
//     else{
//         return "Num is not Palindrome"
//     }

// }
// let res=palindrome(-121);
// console.log(res);

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function (x) {
//   let copy = x;
//   let rem = 0;
//   let result = 0;
//   while (x > 0) {
//     rem = x % 10;
//     result = result * 10 + rem;
//     x = Math.floor(x / 10);
//   }
//   if (copy == result) return true;
//   else return false;
// };
