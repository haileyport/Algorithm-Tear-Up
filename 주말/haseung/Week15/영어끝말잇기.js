function solution(n, words) {
  //나왔던 단어가 또 나오면 탈락
  let turn = 1;
  for (let i = 1; i < words.length; i++) {
    let pass =
      words[i][0] === words[i - 1][words[i - 1].length - 1] &&
      !words.slice(0, i).includes(words[i]);
    if (i % n === 0) turn++;
    if (!pass) return [(i % n) + 1, turn];
  }
  return [0, 0];
}
