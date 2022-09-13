function solution(n) {
  var answer = 0;
  let x = Math.sqrt(n);
  return (Number.isInteger(x)) ? Math.pow(x + 1, 2) : -1;
}