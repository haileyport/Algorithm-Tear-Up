function solution(n, words) {
  let arr = [];

  for (let i = 0; i < words.length; i++) {
    const index = i % n;

    // 사람별로 말한 words 구하기
    if (!arr[index]) arr.push([]);
    arr[index].push(words[i]);

    if (i > 0) {
      const beforeWords = words.slice(0, i);

      // 3. 앞사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
      // 4. 이전에 등장했던 단어는 사용할 수 없습니다.
      if (
        words[i][0] !== words[i - 1][words[i - 1].length - 1] ||
        beforeWords.includes(words[i])
      )
        return [index + 1, arr[index].indexOf(words[i]) + 1];
    }
  }

  return [0, 0];
}
