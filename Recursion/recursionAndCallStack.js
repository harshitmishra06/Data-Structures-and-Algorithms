// function fun(){
//     console.log("Namaste Harshit");
//     fun();
// }
// let res=fun(fun);
// console.log(fun);



/*-----------------------Example-2-------------------------*/
// function fun(num){
//     if(num==0) return ;
//     console.log(num);
//     num=num-1;
//     fun(num)
       
    
// }
// fun(5);




// print n to 1 using recursion

// function print(n){
//     if(n<1) return;
//     console.log(n);
//     print(--n);
// }
// print(5);

// ---------------------Print 1 to n using recursion-----------------------------

// let x=1;
// function xyz(n){
// function func(x){
//     if(x===n+1) return ;
//     console.log(x);
//     func(++x);  
// }
// func(x)
// }
// xyz(10);


// METHOD-2

// let n=10;
// function print(x){
//     if(x>n) return;
//     console.log(x);
//     print(++x);
// }
// print(1);


/*------------------------Table of n ------------------------------------------*/
 

// let n=5;
// function print(x){
//     if(x>n) return;
//     console.log(x*n);
//     print(++x);
// }
// print(1);


/*-----------------------Sum of first n numbers---------------------------------------------*/

// function print(n,sum){
//     if(n<1) return sum;
//   sum+=n;
//    return print(--n,sum);

// }
// const val=print(10,0);
// console.log(val);


// METHOD-2

// function sum(n){
//     if(n==0) return 0;
//     return n+ sum(n-1);
// }
// const val=sum(5);
// console.log(val);



// ---------------------------------------------------

function sum(n){
    if(n==0) return 0;
    return n+ sum(n-1);
}
const val=sum(5);
console.log(val);



