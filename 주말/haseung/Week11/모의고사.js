function solution(answers) {
  let answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const last = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  /* Filtering the answers array and comparing it to the first, second, and last array. */
  const firstResult = answers.filter((item, i) => item === first[i % first.length]).length;
  console.log(firstResult);
  const secondResult = answers.filter((item, i) => item === second[i % second.length]).length;
  const lastResult = answers.filter((item, i) => item === last[i % last.length]).length;
  const max = Math.max(firstResult, secondResult, lastResult);

  if (firstResult === max) {
    answer.push(1);
  }
  if (secondResult === max) {
    answer.push(2);
  }
  if (lastResult === max) {
    answer.push(3);
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
