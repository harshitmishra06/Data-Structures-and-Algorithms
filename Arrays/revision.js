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
