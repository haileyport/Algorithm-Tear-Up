function solution(s, n) {
  var answer = '';
  
  for (let i = 0; i < s.length; i++) {
      if (s[i] === ' ') { 
          answer += s[i]; 
          continue; 
      }
      
      let charCode = s.charCodeAt(i); 
      let newCharCode; 

      // 대문자: 65 ~ 90; 소문자: 97 ~ 122; 알파벳: 26개
      if (charCode <= 90) {
          newCharCode = (charCode + n <= 90) ? charCode + n : charCode + n - 26;
      } else if (charCode >= 97) {
          newCharCode = (charCode + n <= 122) ? charCode + n : charCode + n - 26;
      }
      
      answer += String.fromCharCode(newCharCode)
  }
  return answer;
}