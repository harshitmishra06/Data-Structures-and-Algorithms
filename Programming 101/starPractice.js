// function printpattern(row) {
//   for (i = 0; i < row; i++) {
//     let str = "";
//     for (j = 0; j < row; j++) {
//       str = str + "*";
//     }
//     console.log(str);
//   }
// }
// printpattern(5);

/*.................2..................*/

// function printpattern2(row){
//     for(i=0;i<row;i++){
//         let str="";
//         for(j=0;j<=i;j++){
//             str=str+"*";
//         }
//         console.log(str);
//     }
// }
// printpattern2(5);

/*---------------------3---------------------*/

// function printpattern3(row){
//     for(i=row;i>0;i--){
//         let str="";
//         for(j=1;j<=i;j++){
//             str=str+"*";
//         }
//         console.log(str);
//     }
// }
// printpattern3(5);

/*----------------------4--------------------*/

// function printpattern4(row){
//     for(i=0;i<row;i++){
//         let str="";
//         for(j=0;j<=i;j++){
//             str=str+(j+1);
//         }
//         console.log(str);
//     }
// }
// printpattern4(5);

/*--------------------5-----------------------*/

// function printpattern5(row){
//     for(i=0;i<row;i++){
//         let str="";
//         for(j=0;j<=i;j++){
//             str=str+(i+1);
//         }
//         console.log(str);
//     }
// }
// printpattern5(5);

/*--------------------6-------------------------*/

// function printpattern6(row){
//     for(i=0;i<row;i++){
//         let str="";
//         for(j=5;j>i;j--){
//             str=str+j;
//         }
//         console.log(str);
//     }
// }
// printpattern6(5);

/*----------------7------------------------------*/

// function printpattern7(row) {
//   for (i = 0; i < row; i++) {
//     let str = "";
//     for (j = 0; j < row - i - 1; j++) {
//       str = str + " ";
//     }
//     for (k=row - i-1; k <row; k++) {
//       str = str + "*";
//     }

//     console.log(str);
//   }
// }
// printpattern7(5);

/*------------8----------------------------*/

// function printpattern8(row){
//     for(i=0;i<row;i++){
//         let str="";
//         let flag=true;
//         for(j=0;j<=i;j++){
//             str=str + Number(flag);
//             flag=!flag;
//         }
//         console.log(str);
//     }

// }
// printpattern8(5);

/*----------------------------9-------------------------------------*******/

// function printpattern9(row) {
//   for (let i = 0; i < row; i++) {
//     let str = "";
//     for (let j = 1; j <= i+1; j++) {
//       if (j % 2 == 0) {
//         str = str + 0;
//       } else {
//         str = str + 1;
//       }
//     }
//     console.log(str);
//   }
  
// }
// printpattern9(5);



/*----------------------10---------------------------******/

// function printpattern10(row){
//     let flag=true;
//     for(i=0;i<row;i++){
//         let str="";
      
//         for(j=0;j<=i;j++){
//             str=str + Number(flag);
//             flag=!flag;
//         }
//         console.log(str);
//     }

// }
// printpattern10(5);
