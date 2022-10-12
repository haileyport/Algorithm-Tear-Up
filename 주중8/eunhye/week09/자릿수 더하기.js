function solution(n) {
  var answer = 0;

  answer = String(n)
    .split("")
    .map((el) => Number(el))
    .reduce((acc, cur) => {
      return acc + cur;
    });

  return answer;
}
