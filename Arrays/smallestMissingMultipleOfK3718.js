var missingMultiple = function (nums, k) {
    let set = new Set(nums);
    let j = 1;
    while (set.has(j * k)) {
        j++;
    }
    return j * k;
};