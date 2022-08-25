function solution(price, money, count) {
  var answer = -1, curMoney = 0, totalMoney = 0;
  for (let i = 1; i <= count; i++) {
    curMoney = price * i;
    totalMoney += curMoney;
  }
  answer = totalMoney - money;
  if (answer < 0) answer = 0;
  return answer;
}