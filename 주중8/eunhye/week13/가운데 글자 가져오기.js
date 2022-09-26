function solution(s) {
  let answer = "";
  if (s.length % 2 === 0) {
    const half = s.length / 2 - 1;
    answer = s.slice(half, half + 2);
  } else {
    const half = Math.floor(s.length / 2);
    answer = s.slice(half, half + 1);
  }
  return answer;
}
