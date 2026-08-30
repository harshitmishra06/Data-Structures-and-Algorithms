// var evalRPN = function (tokens) {
//     let stack = [];
//     for (let i = 0; i < tokens.length; i++) {
//         if (tokens[i] == "+" || tokens[i] == "-" || tokens[i] == "*") {
//            let b=stack.pop();
//             let a=stack.pop();
//             let ans=eval(`${a} ${tokens[i]} ${b}`)
//             stack.push(ans);
//         }
//         else if(tokens[i] == "/"){
//             let b=stack.pop();
//             let a=stack.pop();
//             let ans=Math.trunc(a/b);
//             stack.push(ans);
//         }

//         else {
//             stack.push(Number(tokens[i]));
//         }
//     }
//     return stack.pop();
// };

/*-------------------------------------------------------------------------*/
var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] == "+" ||
      tokens[i] == "-" ||
      tokens[i] == "*" ||
      tokens[i] == "/"
    ) {
      let b = stack.pop();
      let a = stack.pop();
      let ans = eval(`${a} ${tokens[i]} ${b}`);
      stack.push(Math.trunc(ans));
    } else {
      stack.push(Number(tokens[i]));
    }
  }
  return stack.pop();
};

/*----------------without eval------------------------*/
var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] == "+" ||
      tokens[i] == "-" ||
      tokens[i] == "*" ||
      tokens[i] == "/"
    ) {
      let b = stack.pop();
      let a = stack.pop();

      let ans;

      if (tokens[i] == "+") {
        ans = a + b;
      } else if (tokens[i] == "-") {
        ans = a - b;
      } else if (tokens[i] == "*") {
        ans = a * b;
      } else {
        ans = Math.trunc(a / b);
      }

      stack.push(ans);
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack.pop();
};

/*--------------------------using Map---------------------------------------*/

var evalRPN = function (tokens) {
    let stack = [];
    let map={
        "+" : (a,b)=>(a+b),
        "*" : (a,b)=>(a*b),
        "-" : (a,b)=>(a-b),
        "/" : (a,b)=>Math.trunc((a/b)),
    }
    for (let i = 0; i < tokens.length; i++) {
      if (map[tokens[i]])
      {
        let b = stack.pop();
        let a = stack.pop();
        let ans = map[tokens[i]](a,b)
        stack.push(ans);
      } else {
        stack.push(Number(tokens[i]));
      }
    }
    return stack.pop();
  };