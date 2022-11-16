function solution(arr, divisor) {
  let answer = [];

  answer = arr.filter(n => n % divisor === 0);
  return (answer.length === 0) ? [-1] : answer.sort((b, a) => b - a);
} 
