/* 
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.5MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.05ms, 33.5MB)
테스트 10 〉	통과 (0.05ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.05ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
테스트 14 〉	통과 (0.05ms, 33.4MB)
테스트 15 〉	통과 (0.05ms, 33.4MB)

*/

function solution(lottos, win_nums) {
  //win_nums의 값으로 obj의 키를 생성함.
  const obj = {};
  for (let i = 0; i < win_nums.length; i++) {
    obj[win_nums[i]] = 1;
  }

  //lottos를 키로 obj를 탐색함. 있으면 count++
  //동시에 lottos의 0의 개수를 저장함
  let zerocount = 0;
  let score = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (obj[lottos[i]]) score++;
    if (!lottos[i]) zerocount++;
  }

  //꽝부터 1등까지 배열에 저장 후 리턴
  const grade = [6, 6, 5, 4, 3, 2, 1];
  return [grade[score + zerocount], grade[score]];
}
