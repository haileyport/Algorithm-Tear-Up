function solution(price, money, count) {
  // n번째 이용 시 price*n으로 이용료 상승
  // 놀이기구 count번 탑승, 현재 자산에서 얼마가 모자라는지 계산
  // 안 모자라면 0

  // count번 반복되는 문제
  const paradice = (el) => {
    if (el > count) return money;
    money -= price * el;
    return paradice(el + 1);
  };
  const joy = paradice(1);
  return joy < 0 ? Math.abs(joy) : 0;
}
