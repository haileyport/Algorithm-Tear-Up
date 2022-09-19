// [PGS] 문자열 내 마음대로 정렬하기, +5
// 소요시간 31.38분 
// 풀면서도 계속 헷갈렸던,,어려웠던 문제 

// 테스트 1 〉	통과 (0.09ms, 33.1MB)
// 테스트 2 〉	통과 (0.10ms, 33MB)
// 테스트 3 〉	통과 (0.22ms, 32.9MB)
// 테스트 4 〉	통과 (0.22ms, 32.9MB)
// 테스트 5 〉	통과 (0.09ms, 33.3MB)
// 테스트 6 〉	통과 (0.24ms, 33.3MB)
// 테스트 7 〉	통과 (0.19ms, 33.3MB)
// 테스트 8 〉	통과 (0.20ms, 33.3MB)
// 테스트 9 〉	통과 (0.10ms, 33.3MB)
// 테스트 10 〉	통과 (0.27ms, 33.4MB)
// 테스트 11 〉	통과 (0.09ms, 33.4MB)
// 테스트 12 〉	통과 (0.30ms, 33.4MB)

function solution(strings, n) {
  // 주어진 배열을 (문자열이니 아스키 코드 기준) 선정렬! 
  strings = strings.sort();
  // n번째 문자열을 아스키코드로 변환 후 오름차순으로 정렬한 배열 생성
  let arrN = strings.map(el => el[n].charCodeAt()).sort((a,b) => a - b);
  // 결과를 담을 배열 생성 
  let result = [];
  
  for(i of strings){ // 선 정렬된 배열 요소를 하나씩 비교 
      for(let j = 0; j < arrN.length; j++){ // n번째 요소(아스키코드)가 정렬된 배열 요소와 비교 
          if(i[n].charCodeAt() === arrN[j]){ // i의 n번째 요소의 아스키코드가 arrN의 j와 같다면 
              result[j] = i;  // arrN이 n번째 요소끼리의 정렬된 인덱스 번호일 것이므로, result 배열의 j번째에 요소를 할당
              arrN[j] = ''; // n번째 요소에 같은 문자열이 존재할 경우를 대비하여 먼저 찾아진 요소는 공백으로 대치
              break;  // break문으로 for문을 나감으로써 i를 다음 요소로 변경 :) 
          }
      }
  }
  
  return result;
}

// return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// string.localeCompare(string2) -> string이 string2보다 사전적으로 앞에 존재하는지 뒤에 존재하는지 비교 숫자형태로 반환함 