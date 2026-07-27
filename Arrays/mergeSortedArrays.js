// function merge(nums1,m,nums2,n){
//     let p1=0;
//     let p2=0;
//     nums1copy=nums1.slice(0,m);
//     for(let i=0;i<nums1.length;i++){
//         if(p2>=n||(nums1copy[p1]<nums2[p2]&& p1<m)){
//             nums1[i]=nums1copy[p1];
//             p1++;
//         }
//         else{
//             nums1copy[p1]>nums2[p2];
//             nums1[i]=nums2[p2];
//             p2++;
//         }
//     }
//     return nums1;
// }
// let res=merge([1,2,3,0,0,0],3,[2,5,6],3);
// console.log(res);

// method2

function mergeArray(nums1, m, nums2, n) {
  if (n == 0) return nums1;
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n-1; i >= 0; i--) {
    if (p1 < 0 || nums2[p2] > nums1[p1]) {
      nums1[i] = nums2[p2];
      p2--;
    } else {
      nums1[i] = nums1[p1];
      p1--;
    }
  }

  return nums1;
}
let res = mergeArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
console.log(res);
