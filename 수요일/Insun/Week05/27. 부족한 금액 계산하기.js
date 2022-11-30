function solution(price, money, count) {
  // 놀이기구를 탈때마다 이용료가 상승. price * count
  // count가 4이고, price가 3이면 => 3+6+9+12 = 30
  // 최종 금액에서 내가 가진 money를 뺀 금액을 리턴
  let sum = 0;
  let ans = 0;
  for (let i = 1; i <= count; i++) {
    sum = sum + price * i;
    if (sum < money) {
      ans = 0;
    } else if (sum > money) {
      ans = sum - money;
    }
  }
  return ans;
}
