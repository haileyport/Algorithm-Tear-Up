function solution(s) {
  let arr = s.split(" ");
  return Math.min(...arr) + " " + Math.max(...arr);
}
