/**
 * 통과 여부 : O
 * 시간 : 30분
 * 점수 : + 10
 */

// 시도 2 : 시도 1의 코드를 좀 더 간단하게 바꿨음
// 함수를 따로 빼지 않고, 변수를 따로 만들지 않고, while 문 안에서 바로 리턴하도록 고침.
function solution2(num) {
  let target = num.toString(2).match(/1/g).length;
  while (true) {
    num++;
    if (num.toString(2).match(/1/g).length === target) return num;
  }
}

const result2 = solution2(78);
console.log(result2);

// 시도 1 : 실제로 1의 갯수를 비교해서 풀었더니 틀렸음 :)
// 테스트케이스 2,6,8,11,13,14 실패
// 효율성 테스트 4 실패
/*
function countOne(n) {
  return n.toString(2).match(/1/g).length;
}

function solution1(num) {
  let target = countOne(num);
  let answer = 0;
  let n = num + 1;
  while (target !== answer) {
    n++;
    answer = countOne(n);
  }
  return n;
}

const result = solution1(15);
console.log(result);
*/
