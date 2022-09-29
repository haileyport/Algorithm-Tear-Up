function solution(numbers, target) {
  let answer = 0;
  
  const calc = (depth, sum) => {
      if(depth < numbers.length) {
          calc(depth + 1, sum + numbers[depth]);
          calc(depth + 1, sum - numbers[depth]);   
      } else {
          if(sum === target) answer++;
      }
  }
  
  calc(0, 0);
  
  return answer;
}