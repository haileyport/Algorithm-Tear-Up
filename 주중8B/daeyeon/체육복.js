/*
테스트 1 〉	통과 (0.08ms, 33.4MB)
테스트 2 〉	통과 (0.08ms, 33.5MB)
테스트 3 〉	통과 (0.10ms, 33.4MB)
테스트 4 〉	통과 (0.09ms, 33.5MB)
테스트 5 〉	통과 (0.17ms, 33.5MB)
테스트 6 〉	통과 (0.08ms, 33.4MB)
테스트 7 〉	통과 (0.22ms, 33.5MB)
테스트 8 〉	통과 (0.09ms, 33.6MB)
테스트 9 〉	통과 (0.11ms, 33.4MB)
테스트 10 〉	통과 (0.10ms, 33.5MB)
테스트 11 〉	통과 (0.10ms, 33.4MB)
테스트 12 〉	통과 (0.09ms, 33.5MB)
테스트 13 〉	통과 (0.09ms, 33.5MB)
테스트 14 〉	통과 (0.09ms, 33.4MB)
테스트 15 〉	통과 (0.10ms, 33.5MB)
테스트 16 〉	통과 (0.09ms, 33.5MB)
테스트 17 〉	통과 (0.09ms, 33.4MB)
테스트 18 〉	통과 (0.09ms, 33.5MB)
테스트 19 〉	통과 (0.09ms, 33.6MB)
테스트 20 〉	통과 (0.09ms, 33.5MB)
*/
/* eslint-disable */

function solution(n, lost, reserve) {
  let obj = {};
  for (let i = 1; i <= n; i++) {
    obj[i] = true; //모두 true로 초기화
  }

  for (let i = 0; i < lost.length; i++) 
    obj[lost[i]] = false; //도난당한 친구는 false로 변경

  //여벌의 체육복은 1개.
  //여벌의 체육복을 가져온 사람도 도난을 당할수 있음. 이때는 무조건 본인이 본인꺼입어야함(빌려오면안댐)
  let arr = []; //실제로 빌려줄수 있는 체육복을 가진 친구번호
  for (let i = 0; i < reserve.length; i++) {
    if (obj[reserve[i]] === false) {
      //가져왔지만 도난을 당한 친구일때 true로 변경
      obj[reserve[i]] = true;
    } 
    else arr.push(reserve[i]);
  }

  // 앞번호부터 줘야 아래의 로직으로 최댓값을 return할수 있으므로 정렬을 해줘야함
  // TEST CASE: 5 [2,4] [3,1] 5
  arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
    //앞번호 부터 빌려줌 
    if (obj[arr[i] - 1] === false) {
      obj[arr[i] - 1] = true;
    } 
    else if (obj[arr[i] + 1] === false) {
      obj[arr[i] + 1] = true;
    }
  }

  return Object.values(obj).filter((el) => el).length;
}
