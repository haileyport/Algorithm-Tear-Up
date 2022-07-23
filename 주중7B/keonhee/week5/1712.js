const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input[0].split(' ').map(Number);

function solution(arr) {
  // 노트북의 판매 대수에 상관없이 매년 임대료, 재산세, 보험료,  급여 등
  // A 만원의 고정 비용이 들며
  // 한대의 노트북을 샌상하기 위해서는 재료비와 인건비등 총 B 만원이 들어간다.

  // ex) A = 1,000 B = 70  노트북 한대 생산 = 1,070만원 열대는 1700만원

  // break-point 를 구하는 프로그램 작성
  // 판 노트북의 대수 가격 > 생산비용 = 손익분기점

  const [A, B, C] = arr;
  // A = 노트북의 대수에 상관없는 고정비
  // B = 한대의 노트북 생산에 들어가는 돈
  // 공약수 ??
  // C = 제품 가격
  // 손인분기점이 발생하기 않는 경우

  // 제품 가격에서 생산비를 뺀 수익
  const margin = C - B;

  // 고정비에서 나눠주면 손익분기점 계산 가능
  const breakPoint = Math.floor(A / margin);

  // 생산비용이 높거나 같을때 는 손익분기점이 발생하지 않는다.
  if (B > C || C - B === 0) {
    console.log(-1);
  } else {
    // 최초 이익 구간을 구해야 하니 손익분기점 + 제품 1개 팜
    console.log(breakPoint + 1);
  }
}

solution(input);
