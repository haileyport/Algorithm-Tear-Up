function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % divisor)) answer.push(arr[i]);
  }

  if (answer.length === 0) return [-1];
  else return answer.sort((a, b) => a - b);
}
