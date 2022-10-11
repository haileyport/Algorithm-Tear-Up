function solution(numbers) { 
  const sum = numbers.reduce((acc, cur) => acc + cur);
  const answer = 45 - sum;
  return answer;
}
