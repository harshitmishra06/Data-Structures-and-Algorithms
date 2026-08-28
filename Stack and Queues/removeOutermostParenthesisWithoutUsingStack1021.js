var removeOuterParentheses = function (s) {
    let level = 0;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            level++;
            if (level > 1) {
                ans += s[i];
            }
        }
        else {
            if (level > 1) {
                ans += s[i];
            }
            level--;
        }
    }
    return ans;
};

/*----------------------------

here time complexity = O(n)
but space complexity = for ans we are using O(n) as strings are immutable in js, but apart from that we are not using any any extra spaces that is O(1),

---------------------------------*/