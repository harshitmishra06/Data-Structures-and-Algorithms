// function moveZeros(nums){
//     let x=0;
//     for(let i=1;i<nums.length;i++){
//         if(nums[x]==0 && nums[i]!==0){
//             nums[x]=nums[i];
//             nums[i]=0;
//             x++;
//         }
//         else if(nums[x]!==0){
//             x++;
//         }
//     } 
//     return nums;

// }
// let val1=moveZeros([1,0,1]);
// let val2=moveZeros([0,1,0,3,12]);
// console.log(val1,val2);


/*-----------------------------------------------------------------------------------*/


// function moveZeros(nums){
//     let arr=[];
   
//     for(let i=0;i<nums.length;i++){
        
//         if(nums[i]!==0){
//             arr.push(nums[i]);

//         }
       
//     }
//     for(let j=arr.length;j<nums.length;j++){
//         arr.push(0)
//     }
//     return arr;
// }
// let val=moveZeros([0,1,0,3,12]);
// console.log(val);