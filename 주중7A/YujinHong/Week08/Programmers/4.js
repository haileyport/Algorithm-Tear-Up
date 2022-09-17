// Level 1
// 부족한 금액 계산하기

function solution(price, money, count) {
  var answer = 0;

  let totalMoney = 0;
  for (let i = 1; i <= count; i++) {
    totalMoney += price * i;
  }

  if (totalMoney > money) answer = totalMoney - money;

  return answer;
}
