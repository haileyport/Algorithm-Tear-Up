
// 33 + 3 + 3 = 39
// 33은 39의 생성자 -> 33은 39를 만들어낸다.
// 생성자가 없는 숫자? 1을 만들어낼 수 있는 숫자?
// 1부터 모든 숫자의 생성자를 배열에 담고
// 1부터 배열에 없는 숫자를 출력.
let arr = [];

// 각 숫자를 스스로 더하는 함수 // 33 + 3 + 3 = 39
// input: 33 output: 39
function addingSelf(num) {
  let sum = Number(num);
  num = String(num);
  let nums = [...num]; //배열로 변환
  for (let i of nums) {
    sum += Number(i);
  }
  return sum;
}

function addToArr(currNum) {
  if (!arr.includes(currNum)) arr.push(currNum);
}

// selfnumber인지 확인
// input: number output: boolean
function isSelfNumber(num) {
  let currNum = addingSelf(num); // num이 selfnum인지 계산해서 currNum에 넣기
  addToArr(currNum); //배열에 currNum 추가

  return (!arr.includes(num) ? true : false);
}

// 1~10000까지 돌려서 출력
for (let i = 1; i <= 10000; i++) {
  if (isSelfNumber(i)) console.log(i);
}