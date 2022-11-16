function solution(sizes) {
  let arr = [];
  for (let n of sizes) {
    arr.push(n.sort((a, b) => a - b));
  }
  let maxNum = 0;
  let minNum = 0;

  // console.log(arr);
  for (let n of arr) {
    if (maxNum < n[0]) maxNum = n[0];
    if (minNum < n[1]) minNum = n[1];
  }
  console.log(maxNum, minNum);
  return maxNum * minNum;
}

//1점 (5분 내)
//   테스트 1 〉	통과 (3.34ms, 33.5MB)
//   테스트 2 〉	통과 (2.96ms, 33.6MB)
//   테스트 3 〉	통과 (3.09ms, 33.6MB)
//   테스트 4 〉	통과 (3.35ms, 33.5MB)
//   테스트 5 〉	통과 (3.43ms, 33.6MB)
//   테스트 6 〉	통과 (3.44ms, 33.6MB)
//   테스트 7 〉	통과 (4.00ms, 33.5MB)
//   테스트 8 〉	통과 (4.19ms, 33.7MB)
//   테스트 9 〉	통과 (4.09ms, 33.6MB)
//   테스트 10 〉	통과 (4.48ms, 33.7MB)
//   테스트 11 〉	통과 (7.24ms, 33.9MB)
//   테스트 12 〉	통과 (5.35ms, 34MB)
//   테스트 13 〉	통과 (6.07ms, 34.7MB)
//   테스트 14 〉	통과 (6.72ms, 35.3MB)
//   테스트 15 〉	통과 (10.11ms, 35.3MB)
//   테스트 16 〉	통과 (7.45ms, 35.8MB)
//   테스트 17 〉	통과 (8.58ms, 37.1MB)
//   테스트 18 〉	통과 (9.98ms, 38.4MB)
//   테스트 19 〉	통과 (11.48ms, 38.5MB)
//   테스트 20 〉	통과 (11.41ms, 38.9MB)
