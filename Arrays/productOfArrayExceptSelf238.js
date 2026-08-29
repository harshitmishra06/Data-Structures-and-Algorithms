/*if array is non zero then this will work*/

var productExceptSelf = function (nums) {
    // let left = 0;
    // let right = 0;
    let ans = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==0){
            product=0;
        }
        else{
        product = nums[i] * product;
    }
    }
    for(let j=0;j<nums.length;j++){
        if(product==0){
            return [0];
        }
        ans[j]=product/nums[j];
    }
    return ans;
};


/*=====================Method 2 (This will handle zeros automatically)======================================================*/

var productExceptSelf = function (nums) {
    let left =1;
    let right =1;
    let ans = [];
    for(let i=0;i<nums.length;i++){
        ans[i]=left;
        left *=nums[i];
    }
    for(let i=nums.length-1;i>=0;i--){
        ans[i]*=right;
        right*=nums[i];
    }
    return ans;
};

