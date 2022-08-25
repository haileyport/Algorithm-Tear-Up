function solution(new_id) {
  var answer = '';
  
  answer = new_id.toLowerCase() 
      .match(/[\w-.]/g).join('') // 소문자/숫자/밑줄, -, . 에 해당되는 것만 
      .replace(/[.]{2,}/g, '.') // .이 2번 이상 반복되는 경우 -> . 하나로 
      .replace(/^[.]|[.]$/g, ''); // .으로 시작/끝 나는 경우 삭제
      
  if (answer === '') answer = 'a';
  
  if (answer.length >= 16) {
      answer = answer.slice(0, 15)
  } 
  
  answer = answer.replace(/[.]{2,}/g, '.')
      .replace(/^[.]|[.]$/g, '');
  
  if (answer.length < 3) {
      while (answer.length < 3) {
          answer += answer[answer.length - 1];
      }
  }
  
  return answer;
}