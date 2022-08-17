function solution(s, n) {
  var answer = "";
  let askii = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      continue;
    }

    askii = s[i].charCodeAt(); // 문자를 아스키코드로 변환
    if (s[i].toUpperCase().charCodeAt() + n > 90) {
      // Z 이상
      askii -= 26;
    }

    answer += String.fromCharCode(askii + n); // 아스키코드를 문자로 변환
  }

  return answer;
}
