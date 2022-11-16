function solution(answers) {
  let firstMan = [1, 2, 3, 4, 5];
  let secondMan = [2, 1, 2, 3, 2, 4, 2, 5];
  let thirdMan = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (firstMan[i % firstMan.length] === answers[i]) count[0]++;
    if (secondMan[i % secondMan.length] === answers[i]) count[1]++;
    if (thirdMan[i % thirdMan.length] === answers[i]) count[2]++;
  }

  let max = Math.max(...count);
  let result = [];

  for (let i = 0; j < count.length; i++) {
    if (count[j] === max) {
      result.push(j + 1);
    }
  }
  return result;
}
