function solution(answers) {
  const answer = [];
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const oneA = answers.filter((a, i) => a === one[i % one.length]).length;
  const twoA = answers.filter((a, i) => a === two[i % two.length]).length;
  const threeA = answers.filter((a, i) => a === three[i % three.length]).length;
  const max = Math.max(oneA, twoA, threeA);

  if (oneA === max) {
    answer.push(1);
  }
  if (twoA === max) {
    answer.push(2);
  }
  if (threeA === max) {
    answer.push(3);
  }
  return answer;
}
