function solution(x, n) {
  var answer = [];
  let addingNum = x;
  for (let i = 0; i < n; i++) {
    answer.push(x);
    x += addingNum;
  }
  return answer;
}