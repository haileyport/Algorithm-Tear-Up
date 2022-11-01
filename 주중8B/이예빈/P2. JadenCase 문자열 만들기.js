// 채점을 시작합니다.
// 정확성  테스트
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.5MB)
// 테스트 5 〉	통과 (0.16ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.15ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.5MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)
// 테스트 11 〉	통과 (0.13ms, 33.4MB)
// 테스트 12 〉	통과 (0.06ms, 33.4MB)
// 테스트 13 〉	통과 (0.06ms, 33.4MB)
// 테스트 14 〉	통과 (0.06ms, 33.4MB)
// 테스트 15 〉	통과 (0.15ms, 33.5MB)
// 테스트 16 〉	통과 (0.06ms, 33.4MB)
// 테스트 17 〉	통과 (0.16ms, 33.5MB)
// 테스트 18 〉	통과 (0.05ms, 33.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0

function solution(s) {
  // s를 공백문자 기준으로 split하여 배열로 만든다
  let arr = s.split(" ");

  // 배열의 길이만큼 반복하여
  for (let i = 0; i < arr.length; i++) {
    // 배열의 요소가 빈 문자열이라면 지나가고(s에 공백문자가 연속된 경우)
    if (arr[i] === "") continue;
    // 아니면 첫 글자를 대문자, 나머지 글자를 소문자로 만든다
    else arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  // 하나의 문자열로 join하여 반환
  return arr.join(" ");
}

//다른 사람의 풀이
function solution(s) {
  return s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
}

"hello"[NaN]; // undefined
"hello".charAt(NaN); // 'h'

"hello"[undefined]; // undefined
"hello".charAt(undefined); // 'h'

"hello"[true]; // undefined
"hello".charAt(true); // 'e'

"hello"["00"]; // undefined

// charAt()은 '00'을 우선적으로 숫자로 변환하기 때문에 'h'를 반환한다.
"hello".charAt("00");

"hello"[1.5]; // undefined

// charAt()은 소수를 반올림 하므로 'e'를 반환한다.
"hello".charAt(1.23);

"hello"[100]; // undefined
"hello".charAt(100); // ''
