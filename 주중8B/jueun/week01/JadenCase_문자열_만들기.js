function solution(s) {
  let answer = "";
  let low = s.toLowerCase().split("");
  for (let i = 0; i < low.length; i++) {
    if ((i - 1 > 0 && low[i - 1] === " ") || i === 0)
      low[i] = low[i].toUpperCase();
    answer += low[i];
  }
  return answer;
}
