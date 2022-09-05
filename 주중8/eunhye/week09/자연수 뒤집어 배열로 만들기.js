function solution(n) {
  var answer = [];
  answer = String(n).split("").map(Number).reverse();
  return answer;
}
