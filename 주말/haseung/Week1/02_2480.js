// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.

const inputs = require("fs")
  .readFileSync(0, "utf-8")
  .toString()
  .split(" ")
  .map(Number);

const [firstNumber, secondNumber, lastNumber] = [
  inputs[0],
  inputs[1],
  inputs[2],
]; //3 3 6

let money = 0; //money value 0으로 초기화

const answer = (first, second, last) => {
  if (first === second && first === last && second === last)
    //3개가 같은 경우
    money = 10000 + first * 1000;

  if (first !== second || first !== last || second !== last) {
    //같은 눈이 2개만 나오는 경우
    if (first === second || first === last) money = 1000 + first * 100;
    if (second === last) money = 1000 + second * 100;
  }

  if (first !== second && first !== last && second !== last) {
    //모두 다른 눈이 나오는 경우
    const sort = [first, second, last].sort(); // 오름차순으로 정렬해서
    money = sort.pop() * 100; // 마지막 요소(가장 큰 눈)의 값을 100으로 곱하고 반환
  }
  return money;
};

answer(firstNumber, secondNumber, lastNumber);
