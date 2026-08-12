// var balancedStringSplit = function(s) {
//     let subString=0;
//     let count=0;
// for( let char of s){
//     if(char==="R") count++
//     else count--
//     if(count===0) subString++
// }
// return subString;
// };


/*-----------------------Method-2-----------------------------------*/
var balancedStringSplit = function(s) {
let curr=s[0];
let next=s[1];
let pointer=0;
let count=0;
let subString=0;
if(curr==="R")count++
else count--
while(pointer<s.length){
    if(count===0){
        curr=s[pointer+1];
        next=s[pointer+2];
        count=0
        if(curr==="L")count--
        else count++
        subString+=1;
    }
    else{
        if(next==="L")count--
        else count++
        next=s[pointer+2]
    }
    pointer++
}
return subString;
};
let res=balancedStringSplit("RLRRLLRLRL");
console.log(res);