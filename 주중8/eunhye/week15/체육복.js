// 이거 진짜.... 그리디 문제인데 그리디한 문제... 열받는 문제...
// 좋은 문제는 아니라고 본 것 같아요 ^^...

// 11점 획득
function solution(n, lost, reserve) {
  let answer = n;
  // 순서대로 sort먼저 필요(n-1번호부터 빌려야 하니까)
  // 여벌이 있으나 도난당했으면 빌려줄 수 없는 학생
  const xReserve = [];

  let lostStudent = lost
    .sort((a, b) => a - b)
    .filter((el) => {
      if (!reserve.includes(el)) {
        return el;
      } else {
        xReserve.push(el);
      }
    });

  let reserveStudent = reserve
    .sort((a, b) => a - b)
    .filter((el) => !xReserve.includes(el));

  // 빌려주는 로직
  // lostStudent[i]-1이 reserveStudent에 존재할 때 해당 체육복 빌림
  // lostStudent[i]와 reserveStudent에서 i-1값인 친구 삭제
  // 없으면 lostStudnet[i]+1로 찾아서 반복

  const reserving = (num) => {
    let popNum = 0;
    if (reserveStudent.includes(num - 1)) {
      popNum = num - 1;
    } else if (reserveStudent.includes(num + 1)) {
      popNum = num + 1;
    }

    if (popNum === 0) {
      return 0;
    } else {
      reserveStudent = reserveStudent.filter((el) => el !== popNum);
      return num;
    }
  };

  lostStudent.forEach((el) => {
    const result = reserving(el);
    result === 0 ? answer-- : answer;
  });

  return answer;
}

// 정확성
// 테스트 1 〉	통과 (0.13ms, 33.4MB)
// 테스트 2 〉	통과 (0.24ms, 33.4MB)
// 테스트 3 〉	통과 (0.23ms, 33.5MB)
// 테스트 4 〉	통과 (0.14ms, 33.4MB)
// 테스트 5 〉	통과 (0.22ms, 33.4MB)
// 테스트 6 〉	통과 (0.13ms, 33.4MB)
// 테스트 7 〉	통과 (0.28ms, 33.6MB)
// 테스트 8 〉	통과 (0.14ms, 33.5MB)
// 테스트 9 〉	통과 (0.13ms, 33.4MB)
// 테스트 10 〉	통과 (0.24ms, 33.4MB)
// 테스트 11 〉	통과 (0.13ms, 33.4MB)
// 테스트 12 〉	통과 (0.17ms, 33.4MB)
// 테스트 13 〉	통과 (0.14ms, 33.4MB)
// 테스트 14 〉	통과 (0.14ms, 33.5MB)
// 테스트 15 〉	통과 (0.15ms, 33.4MB)
// 테스트 16 〉	통과 (0.19ms, 33.4MB)
// 테스트 17 〉	통과 (0.21ms, 33.3MB)
// 테스트 18 〉	통과 (0.13ms, 33.5MB)
// 테스트 19 〉	통과 (0.20ms, 33.4MB)
// 테스트 20 〉	통과 (0.14ms, 33.4MB)
