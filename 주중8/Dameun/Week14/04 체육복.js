function solution(n, lost, reserve) {
  let result = Array(n).fill(true);
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);

  for (let n of lost) {
    result[n - 1] = false;
  }

  let noReserveLost = [];
  for (let n of reserve) {
    if (result[n - 1] === false) {
      result[n - 1] = true;
    } else {
      noReserveLost.push(n);
    }
  }
  for (let n of noReserveLost) {
    if (result[n - 2] === false) {
      result[n - 2] = true;
    } else if (result[n] === false) {
      result[n] = true;
    }
  }
  return result.filter((el) => el === true).length;
}

// n = 전체 학생수
// lost = 도난 학생
// reserve = 여벌 있는놈들

//배열을 정렬하니까 통과가 되었다 안하니까 18,20번이 안됨. 왜..?

//12점
//20분 이내

// 테스트 1 〉	통과 (0.10ms, 33.5MB)
// 테스트 2 〉	통과 (0.12ms, 33.6MB)
// 테스트 3 〉	통과 (0.11ms, 33.4MB)
// 테스트 4 〉	통과 (0.11ms, 33.4MB)
// 테스트 5 〉	통과 (0.18ms, 33.4MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)
// 테스트 7 〉	통과 (0.18ms, 33.4MB)
// 테스트 8 〉	통과 (0.11ms, 33.4MB)
// 테스트 9 〉	통과 (0.11ms, 33.4MB)
// 테스트 10 〉	통과 (0.20ms, 33.4MB)
// 테스트 11 〉	통과 (0.10ms, 33.4MB)
// 테스트 12 〉	통과 (0.10ms, 33.5MB)
// 테스트 13 〉	통과 (0.10ms, 33.5MB)
// 테스트 14 〉	통과 (0.10ms, 33.4MB)
// 테스트 15 〉	통과 (0.10ms, 33.4MB)
// 테스트 16 〉	통과 (0.10ms, 33.4MB)
// 테스트 17 〉	통과 (0.11ms, 33.4MB)
// 테스트 18 〉	통과 (0.10ms, 33.5MB)
// 테스트 19 〉	통과 (0.10ms, 33.6MB)
// 테스트 20 〉	통과 (0.11ms, 33.6MB)
