/*---------------------Factorial of n -------------------------------*/

function mul(n){
    if(n==0) return 1;
    return n* mul(n-1);
}
const val=mul(5);
console.log(val);
