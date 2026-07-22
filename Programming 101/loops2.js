// Write a fun that searches for an element in an array and returns the index if the element is not present return -1

// let arr=[1,2,3,4,5,6];
// function findElement(num){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==num){
//             return i;
//         }
//     }
//     return -1;

// }
// let val=findElement(10);
// console.log(val);

// Write a fun that returns the no of negative number in an array

// let arr=[1,-2,3,-4,5,-7];
// function findNegElement(){
//     let count=0;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]<0){
//             count=count+1;

//         }
//     }
//     return count;
// }
// let result=findNegElement();
// console.log(result);

// Method2
// function findNegElement(arr){
//     let count=0;
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]<0){
//             count=count+1;

//         }
//     }
//     return count;
// }
// let result=findNegElement([1,-2,3,-4,5,-7]);
// console.log(result);

// Write a fun that returns the largest number in an array
// let arr = [1, 2, 3, 4, 5, 67, 8];
// function findLargestNum() {
//   let temp = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (temp < arr[i]) {
//       temp = arr[i];
//     }
//   }
//   return temp;
// }
// let res = findLargestNum();
// console.log(res);




// for smallest
// function smallestNum(arr){
//     let smallest=arr[0];
//     for(i=0;i<arr.length;i++){
//         if(smallest>arr[i]){
//             smallest=arr[i];
//         }

//     }
//     return smallest;
// }
// let res= smallestNum([1,2,3,4,5,-1]);
// console.log(res);



