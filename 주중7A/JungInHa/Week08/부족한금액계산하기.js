function solution(price, money, count) {
  let expense = 0;
  for (let i = 1; i <= count; i++) {
      expense += price * i;
  }

  let answer = (expense > money) ? expense - money : 0;
  
  return answer;
}