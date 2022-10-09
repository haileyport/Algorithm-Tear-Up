function solution(price, money, count) {
  // 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
  // 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지?
  // 금액이 부족하지 않으면 0 return

  //들어온 price 값부터 시작
  let totalPrice = 0;

  for (let i = 0; i <= count; i++) {
    totalPrice += price * i;
  }
  //money가 totalPrice보다 크면 0 아니면 부족한 돈만큼 빼서 리턴
  return money > totalPrice ? 0 : totalPrice - money;
}
