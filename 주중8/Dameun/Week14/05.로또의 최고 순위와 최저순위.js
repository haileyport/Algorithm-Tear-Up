function solution(lottos, win_nums) {
  let sortLottos = lottos.sort((a, b) => a - b);
  let sortWin = win_nums.sort((a, b) => a - b);

  let result = [];
  for (let n of sortLottos) {
    if (n === 0) {
      result.push(n);
    } else if (sortWin.includes(n)) {
      result.push(n);
    }
  }
  let best = 7 - result.length;
  let worst = 7 - result.filter((el) => el !== 0).length;
  if (best === 7) best = 6;
  if (worst === 7) worst = 6;
  return [best, worst];
}

//lottos : 로또번호배열
//당첨번호 배열
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));

//3점
//20분내
// 테스트 1 〉	통과 (0.11ms, 33.6MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.09ms, 33.5MB)
// 테스트 8 〉	통과 (0.12ms, 33.4MB)
// 테스트 9 〉	통과 (0.10ms, 33.4MB)
// 테스트 10 〉	통과 (0.10ms, 33.4MB)
// 테스트 11 〉	통과 (0.09ms, 33.4MB)
// 테스트 12 〉	통과 (0.12ms, 33.5MB)
// 테스트 13 〉	통과 (0.14ms, 33.5MB)
// 테스트 14 〉	통과 (0.15ms, 33.4MB)
// 테스트 15 〉	통과 (0.12ms, 33.4MB)
