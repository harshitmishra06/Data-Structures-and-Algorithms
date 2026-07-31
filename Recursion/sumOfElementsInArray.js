// function sumOfArray(arr,x){
//     if(x===arr.length-1) return arr[arr.length-1];
//     return arr[x]+ sumOfArray(arr,++x);
// }
// const val=sumOfArray([5,3,2,0,1,6,7,8,9],0);
// console.log(val);

// Method-2


// function sumOfArray(arr, n) {
//     if (n == 0) return 0;
//     return arr[n-1] + sumOfArray(arr, n-1);
// }

// const val = sumOfArray([5,3,2,0,1], 5);
// console.log(val); // 11




/*------------------------Sum of even number in an array-----------------------*/


// function sumOfArray(arr, n) {
//   if (n == 0) return 0;
//   if (arr[n - 1] % 2 === 0) {
//     return arr[n - 1] + sumOfArray(arr, n - 1);
//   } else {
//     return sumOfArray(arr, n - 1);
//   }
// }

// const val = sumOfArray([5, 3, 2, 0, 1], 5);
// console.log(val); // 2



/*---------------------------Sum of Odd number in an array----------------------*/

// function sumOfArray(arr, n) {
//     if (n == 0) return 0;
//     if (arr[n - 1] % 2 !== 0) {
//       return arr[n - 1] + sumOfArray(arr, n - 1);
//     } else {
//       return sumOfArray(arr, n - 1);
//     }
//   }
  
//   const val = sumOfArray([5, 3, 2, 0, 1], 5);
//   console.log(val); // 9
  



/*-----------------------------------------------------------------*/