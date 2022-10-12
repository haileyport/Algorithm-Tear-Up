function solution(numbers) {
  var answer = 0;
  // numbers에 없는 숫자의 합을 더해야 합니다.
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let i = 0;
  while (i < numbers.length) {
    if (num.includes(numbers[i])) {
      const index = num.indexOf(numbers[i]);
      num.splice(index, 1);
    }
    i++;
  }
  for (k = 0; k < num.length; k++) {
    answer += num[k];
  }
  return answer;
}
