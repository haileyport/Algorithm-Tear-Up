function solution(n) {
  var answer = 0;
  const trans = String(n)
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
  answer = Number(trans);
  return answer;
}
