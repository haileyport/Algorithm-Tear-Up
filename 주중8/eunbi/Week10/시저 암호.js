// [PGS] 시저 암호 , +7

// 테스트 1 〉	통과 (0.20ms, 33.4MB)
// 테스트 2 〉	통과 (0.20ms, 33.4MB)
// 테스트 3 〉	통과 (0.21ms, 33.4MB)
// 테스트 4 〉	통과 (0.19ms, 33.4MB)
// 테스트 5 〉	통과 (0.18ms, 33.4MB)
// 테스트 6 〉	통과 (0.22ms, 33.4MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.19ms, 33.4MB)
// 테스트 9 〉	통과 (0.21ms, 33.4MB)
// 테스트 10 〉	통과 (0.19ms, 33.5MB)
// 테스트 11 〉	통과 (0.23ms, 33.5MB)
// 테스트 12 〉	통과 (0.23ms, 33.5MB)
// 테스트 13 〉	통과 (37.45ms, 38.1MB)

function solution(s, n) {
  // 알파벳이 담긴 배열 생성(대문자)
   // 각 문자가 공백이 아니면서 indexOf 메서드 이용시 찾을 수 없다면 대문자 변환 후 찾은 후 
   // 찾은 인덱스 + n 인덱스의 값을 반환 -> 반환된 인덱스를 이용하여 toLowercase()로 소문자로 더해주기
   // 공백이라면 공백을 더해주기
      
    // result += arr[arr.indexOf(s[i].toUpperCase()) + n].toLowerCase();
    // -> TypeError: undefined에 toLowerCase()를 사용할 수 없다는 에러가 뜸 왜..?
    //  ->  arr[arr.indexOf(s[i].toUpperCase()) + n] -> string 타입으로 알파벳 잘나옴 뭐가 문제인지 모르겠음 ㅠ
  let result = '';
  const capitals = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));
  const lowers = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
  
  for(let i = 0; i < s.length; i++){ 
      if(s[i] !== ' ' && capitals.indexOf(s[i]) !== -1){
          let idx = capitals.indexOf(s[i]) + n;
          idx > 25 ? result += capitals[idx-26] : result += capitals[idx];
          
      }else if(s[i] !== ' '&& capitals.indexOf(s[i]) === -1){ // 공백이 아니면서 소문자일 경우 
          let idx = capitals.indexOf(s[i].toUpperCase()) + n;
      idx > 25 ? result += capitals[idx-26].toLowerCase() : result += capitals[idx].toLowerCase();
          
      }else{
          result += ' ';
      }
  }
  
  return result;
}