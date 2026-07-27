function removeElement(nums,val) {
    let x=0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }

   
  }
  return x;
}
let res = removeElement([3, 2, 2, 3],3);
console.log(res);
