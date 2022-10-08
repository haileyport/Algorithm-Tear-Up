function solution(left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    (Number.isInteger(Math.sqrt(i))) ? sum -= i : sum += i;
  }
  return sum;
}
