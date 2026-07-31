/*---------------------------Reverse String------------------------------*/
// function reverseString(s){
//     let rev=0;
//     for(let i=0;i<Math.floor(s.length/2);i++){
//         rev=s[i];
//         s[i]=s[s.length-1-i];
//         s[s.length-1-i]=rev;

//     }
//     return s;
// }
// let val=reverseString(["r","a","h","u","l"]);
// console.log(val);

/*-------------------------------Remove Element---------------------------*/

// function removeElement(nums,val){
//     let temp=0;
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!=val){
//             nums[temp]=nums[i];
//             temp=temp+1;
//         }
//     }
//     return temp;

// }
// let val=removeElement([3,2,2,3,3,1,4],3);
// console.log(val);

// let arr=[2,3,5,7,0,1]

function buyAndSell(arr) {
  let maxProfit = 0;
  let x = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[x] && arr[i] - arr[x] > maxProfit) {
      maxProfit = arr[i] - arr[x];
    } else if (arr[i] < arr[x]) {
      x++;
    }
  }
  return maxProfit;
}
let val = buyAndSell([7, 1, 5, 3, 6, 4]);
console.log(val);
