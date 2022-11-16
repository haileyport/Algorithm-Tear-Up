function solution(num) {
  // 짝수: 2로 나눈다
  // 홀수: 3을 곱하고 1을 더한다
  // count로 횟수를 셀 것
  // count >= 500이면 return -1
  // 1은 return 0
  if (num === 1) return 0;

  let count = 0;
  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
      count++;
    } else {
      num = num * 3 + 1;
      count++;
    }
  }
  if (count >= 500) return -1;
  else return count;
}
