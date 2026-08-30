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