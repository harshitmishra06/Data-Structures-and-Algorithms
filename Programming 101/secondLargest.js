// Find second largest

// function secondLargest(arr) {
//     if(arr.length<2){
//         return "Array shoould have atleast 2 elements";
//     }
//   let largestnum = arr[0];
//   let largestnum2 = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (largestnum < arr[i]) {
//       largestnum2 = largestnum;
//       largestnum = arr[i];
//     } 
//     else if (arr[i] > largestnum2 && arr[i]!==largestnum) {
//       largestnum2 = arr[i];
//     }
//   }
//   return largestnum2;
// }
// let arr = [4, 9, 0, 2, 8, 7, 1,9];
// let res = secondLargest(arr);
// console.log(res);


// Corner cases related with above solution
// Array is empty 
// array has negative Element
// array has duplicates