function solution(answers) {
  const one = '12345'.repeat(10000 / 5)
  const two = '21232425'.repeat(10000 / 8)
  const three = '3311224455'.repeat(10000 / 10)

  let score1 = 0, score2 = 0, score3 = 0;

  answers.forEach((el, idx) => {
    if (el == one[idx]) score1++;
    if (el == two[idx]) score2++;
    if (el == three[idx]) score3++;
  })
  let answer = [score1, score2, score3];
  let result = [];

  const max = Math.max(...answer);

  if (score1 === max) result.push(1)
  if (score2 === max) result.push(2)
  if (score3 === max) result.push(3)

  return result;

}