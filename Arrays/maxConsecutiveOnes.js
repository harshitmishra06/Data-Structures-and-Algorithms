// function maxConsecutiveOnes(nums){
//     let count=0;
//     let x=0;
//     for(let i=1; i<nums.length;i++){
//         if(nums[x]==1 && nums[i]==1){
//             count++;
//         }
//         else if(nums[x]!==1 || nums[i]!==1){
//         count--;

//             x++;
//         }
//     }
//     return count;
// }
// let val=maxConsecutiveOnes([1,1,0,1,1,1,1]);
// console.log(val);

function maxOnes(nums) {
  let count = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      count = 0;
    }
  }
  return maxCount;
}
let val = maxOnes([1, 1, 0, 1, 1, 1, 1]);
console.log(val);
