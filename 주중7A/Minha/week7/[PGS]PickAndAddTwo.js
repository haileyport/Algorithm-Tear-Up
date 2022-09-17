function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      // 같은 자리를 제외하고 더하기
      if (i !== j)
        answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = new Set(answer);
  return [...answer].sort((a, b) => a - b);
}