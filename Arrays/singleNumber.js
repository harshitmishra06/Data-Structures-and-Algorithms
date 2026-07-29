function singleNumber(nums) {
  let object = {};
  for (let i = 0; i < nums.length; i++) {
    if (object[nums[i]] == undefined) {
      object[nums[i]] = 1;
    } else {
      object[nums[i]] += 1;
    }
  }
  for (let [key, value] of Object.entries(object)) {
    if (value === 1) return  typeof key;
  }
}
let val = singleNumber([2, 2, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5]);
console.log(val);
