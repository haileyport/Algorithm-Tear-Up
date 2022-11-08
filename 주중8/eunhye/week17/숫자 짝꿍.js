function solution(X, Y) {
  let answer = '';
  let arry = [...Y];
  let arrx = [...X];
  for (let i = 0; i < 10; i++) {
    const X_cnt = arrx.filter((item) => +item === i).length;
    const Y_cnt = arry.filter((item) => +item === i).length;
    answer += i.toString().repeat(Math.min(X_cnt, Y_cnt));
  }

  if (answer === '') {
    return '-1';
  } else if (answer.match(/[^0]/g) === null) {
    return '0';
  } else {
    return [...answer].sort().reverse().join('');
  }
}

// 10점~
// 테스트 1 〉	통과 (0.23ms, 33.4MB)
// 테스트 2 〉	통과 (0.24ms, 33.5MB)
// 테스트 3 〉	통과 (0.24ms, 33.5MB)
// 테스트 4 〉	통과 (0.23ms, 33.5MB)
// 테스트 5 〉	통과 (0.22ms, 33.6MB)
// 테스트 6 〉	통과 (0.63ms, 33.7MB)
// 테스트 7 〉	통과 (0.49ms, 33.6MB)
// 테스트 8 〉	통과 (0.67ms, 33.5MB)
// 테스트 9 〉	통과 (0.49ms, 33.6MB)
// 테스트 10 〉	통과 (0.47ms, 33.5MB)
// 테스트 11 〉	통과 (1657.62ms, 215MB)
// 테스트 12 〉	통과 (1731.53ms, 215MB)
// 테스트 13 〉	통과 (1722.43ms, 215MB)
// 테스트 14 〉	통과 (1748.47ms, 215MB)
// 테스트 15 〉	통과 (1861.04ms, 215MB)
// 테스트 16 〉	통과 (0.24ms, 33.4MB)
// 테스트 17 〉	통과 (0.19ms, 33.5MB)
// 테스트 18 〉	통과 (0.32ms, 33.4MB)
// 테스트 19 〉	통과 (0.31ms, 33.5MB)
