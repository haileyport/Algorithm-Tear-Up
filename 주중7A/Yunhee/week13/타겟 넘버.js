function solution(numbers, target) {
    let answer = 0;
    const length = numbers.length;
  
    function dfs(count, sum) {
      if (count === length) {
        if (target === sum) {
          answer++;
        }
        return;
      }
  
      dfs(count + 1, sum + numbers[count]);
      dfs(count + 1, sum - numbers[count]);
    }
  
    dfs(0, 0);
  
    return answer;
  }