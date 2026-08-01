// function fibonacci(n){
//     if(n<=1) return n;
//     return fibonacci(n-1)+fibonacci(n-2);
// }
// let cal=fibonacci(4);
// console.log(cal);



/*-------------------------Iterative approach------------------------------*/

// let arr=[0,1];
// let n=5;
// for(let i=2;i<6;i++){
//     arr[i]=arr[i-1]+arr[i-2];

// }
// console.log(arr);





// function trib(n){
//     if(n<=1) return n;
//     return trib(n-1)+trib(n-2) + trib(n-3);
// }
// let cal=trib(4);
// console.log(cal);



function rabbitPopulation(n){
    if(n<=1) return 2;
    return 2*rabbitPopulation(n-1);
}
let res=rabbitPopulation(12);
console.log(res);