function solution(num) {
  let answer = 0;

  // 주어진 수가 1인 경우에는 0을 반환
  if (num === 1) return 0;

  // 결과로 나온 수에 같은 작업을 1이 될 때까지 반복
  while (num !== 1) {
    // 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환
    if (answer >= 500) {
      answer = -1;
      break;
    }

    // 입력된 수가 짝수라면 2로 나눈다.
    if (num % 2 === 0) num = num / 2;
    // 입력된 수가 홀수라면 3을 곱하고 1을 더한다.
    else num = num * 3 + 1;

    answer++;
  }

  return answer;
}
