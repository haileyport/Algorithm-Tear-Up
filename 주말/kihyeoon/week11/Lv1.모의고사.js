function solution(answers) {
  // 각 사람의 번호목록을 정답배열의 길이만큼 만든다.
  // 정답과 비교해서 점수를 구한다.
  // 가장 높은 점수의 사람을 리턴한다.
  // 점수가 같은 사람이 여럿이면 오름차순으로 정렬해서 리턴한다.
  const numbers = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let score = [0, 0, 0];

  for (let i = 0; i < numbers.length; i++) {
    let arr = numbers[i];
    for (let j = 0; j < answers.length; j++) {
      if (!arr[j]) {
        arr.push(...numbers[i]);
      }
      if (arr[j] === answers[j]) {
        score[i]++;
      }
    }
  }
  const maxScore = Math.max(...score);
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === maxScore) {
      result.push(i + 1);
    }
  }
  return result;
}

console.log(solution([1, 2, 3, 4, 5]));


function solution2(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
