/*
* 통과 여부 : 통과
* 시간 : 5분
* 점수 : 
*/

function solution(s) {
  let open = 0;

  for (let i = 0; i < s.length; i++) {
      open += s[i] === '('? 1:-1;
      if(open < 0) return false;
  }

  return open === 0 ? true :false;
}
