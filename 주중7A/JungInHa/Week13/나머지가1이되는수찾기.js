function solution(n) {
  let num = 1;
  while (n % num !== 1) num++;
  return num
}
