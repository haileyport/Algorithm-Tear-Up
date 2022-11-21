function solution(word) {
    //모든 단어가 담기는 배열
  const result = [];
    //만든 단어
  const str = "";
    //길이 5이하의 단어를 만들자
  for (let i = 1; i <= 5; i++) dfs(str, i, result);
    //모든 단어를 정렬해주고 거기에서 주어진단어가 몇번째단어인지 return
  return result.sort().indexOf(word) + 1;
}

const dfs = (word, length, result) => {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  if (length === word.length) {
    result.push(word);
    return;
  }
  vowels.forEach((vowel) => {
    dfs(word + vowel, length, result);
  });
}
