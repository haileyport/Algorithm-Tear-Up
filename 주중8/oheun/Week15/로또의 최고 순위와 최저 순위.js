/**
 * 통과 여부 : 통과
 * 시간 : 30분
 * 점수 : +5

 */

/**
 *
 * 민우야 왜 그러는거야
 * 알아볼 수 없는 번호는 0
 * @param {*} lottos 길이 6인 정수 배열
 * @param {*} win_nums 당첨 번호가 담긴 배열
 * @returns 당첨 가능한 최고 순위와 최저 순위
 */
function solution(lottos, win_nums) {
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  // 0인 거 제외하고 일치하는 개수
  let equal = win_nums.filter((num) => {
    return lottos.indexOf(num) !== -1;
  }).length;

  // 이제 0인 애들이 바뀌면 어디까지 갈 수 있나 보자.
  // 어차피 그냥 0 개수 재면 되는 거 아님?
  let zero = lottos.filter((num) => {
    return num === 0;
  }).length;

  // 로또 순위 계산하는 걸 만들어보자
  let max = 7 - zero - equal;
  let min = 7 - equal;

  if (equal === 0) min = 6;
  if (equal === 0 && zero === 0) max = 6;
  return [max, min];
}

let output = solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
console.log(output);
