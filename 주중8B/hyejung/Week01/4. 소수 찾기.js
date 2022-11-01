/**
 * 통과 여부 : O
 * 시간 : 20분
 * 점수 : ??
 */

const n = 10;

function solution1(n) {
  // 메서드를 사용한 방식이 더 오랜 시간이 걸립니다.
  let arr = Array.from({length: n + 1}, (_, i) => i);
  arr[1] = 0;

  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = 2 * i; j <= n; j += i) {
        arr[j] = 0;
      }
    }
  }
  return arr.filter(el => el !== 0).length;
}

const result1 = solution1(n);
console.log(result1);

// 효율성 테스트
// 테스트 1 〉	통과 (92.14ms, 44.4MB)
// 테스트 2 〉	통과 (89.36ms, 44.2MB)
// 테스트 3 〉	통과 (92.38ms, 44.2MB)
// 테스트 4 〉	통과 (90.11ms, 44.2MB)

/*[기존 풀이] : 에라토스테네스의 체를 이용해서 풀었습니다.*/
function solution(n) {
  let cnt = 0;
  let arr = new Array();

  // 2부터 n까지의 숫자 배열을 만들어줍니다.
  // 이 커다란 배열을 돌면서 배수를 지워가며 소수를 분류합니다.
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }
  arr[0] = 0;
  arr[1] = 0;

  // 2부터 n까지 숫자를 가득 채워둔 큰 틀에서 하나씩 반복을 돌아줍니다.
  for (let i = 2; i <= n; i++) {
    // 만약 현재 인덱스가 0이라면 다음으로 건너뜁니다.
    if (arr[i] === 0) continue;

    // 인덱스에 숫자가 있다면, 현재 수의 배수에 해당하는 위치를 방문해서 0으로 초기화합니다.
    for (let j = 2 * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  // 걸러진 배열에서 0이 아닌 요소는 소수이므로, 숫자를 카운팅해서 리턴합니다.
  for (let num of arr) {
    if (num) cnt++;
  }
  return cnt;
}

// 효율성 테스트
// 테스트 1 〉	통과 (66.61ms, 59.2MB)
// 테스트 2 〉	통과 (65.56ms, 59.4MB)
// 테스트 3 〉	통과 (91.19ms, 59.1MB)
// 테스트 4 〉	통과 (67.78ms, 59.2MB)
