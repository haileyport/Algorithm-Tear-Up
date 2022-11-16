function solution(s) {
  let answer = '';
  const words = s.split(' ');

  // 단어 개수만큼
  for (let i = 0; i < words.length; i++) {
    // 문자 개수만큼
    for (let j = 0; j < words[i].length; j++) {
      answer += (j % 2 === 0) ?
        words[i][j].toUpperCase() : words[i][j].toLowerCase();
    }
    if (i < words.length - 1) answer += ' ';
  }
  return answer;
}