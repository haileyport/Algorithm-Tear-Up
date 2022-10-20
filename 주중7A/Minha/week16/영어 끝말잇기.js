function solution(n, words) {
  let last = words[0];
  let turn = 1;
  for (let i = 1; i < words.length; i++) {
    const player = i % n + 1;

    // 끝 문자가 같지 않을 때
    if (last.slice(-1) !== words[i][0]) {
      return [player, turn];
    }

    // 이미 나온 단어(현재 단어와 index가 같지 않을 때)
    if (words.findIndex(item => words[i] === item) !== i) {
      return [player, turn];
    }

    last = words[i];
    if (player === n) turn += 1;
  }

  return [0, 0];
}