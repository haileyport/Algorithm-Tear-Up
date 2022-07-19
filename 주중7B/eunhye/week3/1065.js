//한수

//X의 각 자리가 등차수열 >> 한수
//그러면 한자리, 두자리 수는 모두 한수로 인정한다.
//등차수열? 연속된 두 개의 수 차이가 일정한 수열
// 1<=a<=N인 한수 a의 개수를 출력해라

const fs = require("fs");

const input = fs.readFileSync("./text.txt").toString().trim().split("\n")[0];

//입력값을 넘버로 변환
function getInput(input) {
  const maxNum = Number(input);
  return maxNum;
}

//한자리, 두자리 수는 모두 한수로 취급
function getAllHansu(num) {
  if (num >= 100) {
    //num > 100 으로 했다가 한참 헤맴...
    return 99;
  }
  return num;
}

//세자리 수
function threeNum(num) {
  if (num < 99) {
    return 0;
  }

  let hansu = 0;

  //백의자리 - 십의자리가 십의자리 - 일의자리와 같으면 한수
  // 123 => 3-2, 2-1
  // 753 => 7-5, 5-3
  for (i = 100; i <= num; i++) {
    const parse = String(i);
    const minus1 = Number(parse[2] - parse[1]);
    const minus2 = Number(parse[1] - parse[0]);

    if (minus1 === minus2) {
      hansu++;
    }
  }
  return hansu;
}

const testN = getInput(input);
let hansu = getAllHansu(testN);
hansu += threeNum(testN);

console.log(hansu);

//1000보다 작거나 같은 자연수가 입력값인데, 1000은 한수가 아니므로 고려하지 않는다.
