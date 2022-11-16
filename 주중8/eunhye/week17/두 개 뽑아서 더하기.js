function solution(numbers) {
  let ans = [];
  for (i = 0; i < numbers.length - 1; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      ans.push(numbers[i] + numbers[j]);
    }
  }
  ans = [...new Set(ans)];
  ans.sort((a, b) => a - b);
  return ans;
}

// 정확성 테스트
// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.18ms, 33.6MB)
// 테스트 6 〉	통과 (0.20ms, 33.5MB)
// 테스트 7 〉	통과 (0.60ms, 33.6MB)
// 테스트 8 〉	통과 (0.60ms, 33.6MB)
// 테스트 9 〉	통과 (0.51ms, 33.6MB)
