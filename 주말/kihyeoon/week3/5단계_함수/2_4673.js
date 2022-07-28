// 셀프넘버 아닌 숫자 구하기
function notSelfNum(num) {
  let ary = String(num).split("");
  for (data of ary) {
    num += Number(data);
  }
  return num;
}

const range = 10000;
// 0~10000 범위까지 셀프넘버 배열을 생성하고 true로 초기화.
let selfNumbers = Array(range + 1).fill(true);

for (let i = 0; i <= range; i++) {
  // 셀프넘버가 아니면 false로 변환.
  selfNumbers[selfNum(i)] = false;
}

// true인 index만 출력
for (let i = 0; i < range; i++) {
  if (selfNumbers[i]) {
    console.log(i);
  }
}
