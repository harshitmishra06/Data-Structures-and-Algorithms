function palindrome(num) {
  let copy = num;
  let rem = 0;
  let result = 0;
  while (num > 0) {
    rem = num % 10;
    result = result + rem * rem * rem;
    num = Math.floor(num / 10);
  }
  if (copy == result) {
    return "Num is armstrong";
  } else {
    return "Num is not Armstrong";
  }
}
let res = palindrome(143);
console.log(res);
