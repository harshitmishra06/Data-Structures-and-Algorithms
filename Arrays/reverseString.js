// function reverseString(arr) {
//   let rev = [];
//   let lastElement="";
//   while (arr.length > 0) {
//     lastElement = arr.pop();
//     rev.push(lastElement)
//   }

//   return rev;
// }
// let res = reverseString(["h", "e", "l", "l", "o"]);
// console.log(res);



// function reverseString(s){
//     let temp=0;
//     for(let i=0;i<Math.floor(s.length/2);i++){
//         temp=s[i];
//         s[i]=s[s.length-1-i];
//         s[s.length-1-i]=temp;
    
//     }
//     return s;
// }
// let res=reverseString(["h","e","l","l","o"]);
// console.log(res);