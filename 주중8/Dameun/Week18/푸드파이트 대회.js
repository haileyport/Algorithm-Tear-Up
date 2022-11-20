function solution(food) {
  let maxNum = food.length;
  let result = "";
  for (let n = 1; n < maxNum; n++) {
    result += `${n}`.repeat(parseInt(food[n] / 2));
  }
  result += "0";
  for (let n = maxNum - 1; n > 0; n--) {
    result += `${n}`.repeat(parseInt(food[n] / 2));
  }
  return result;
}

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.4MB)
// 테스트 5 〉	통과 (0.08ms, 33.5MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.09ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.05ms, 33.4MB)
// 테스트 13 〉	통과 (0.05ms, 33.4MB)
// 테스트 14 〉	통과 (0.06ms, 33.4MB)
// 테스트 15 〉	통과 (0.05ms, 33.5MB)
// 테스트 16 〉	통과 (0.07ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.05ms, 33.4MB)
// 테스트 19 〉	통과 (0.05ms, 33.4MB)
// 테스트 20 〉	통과 (0.05ms, 33.4MB)
