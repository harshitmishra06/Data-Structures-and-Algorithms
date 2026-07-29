function missingNumber(nums){
    let sum=0;
    let expectedSum=(nums.length*(nums.length+1))/2;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
    }
    return expectedSum-sum;
}
let val=missingNumber([3,0,1,2,4,5,6,7]);
console.log(val);