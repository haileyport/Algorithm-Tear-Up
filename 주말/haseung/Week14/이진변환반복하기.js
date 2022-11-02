function solution(s) {
  //s 내의 모든 0을 제거
  let count = 0;
  let zero = 0;

  while (s.length > 1) {
    let num = 0;
    for (let i = 0; i < s.length; i++) {
      if (s.charAt(i) === "0") zero++; //0인 경우 zero 카운트 증가
      else num++; //1이면 num 증가
    }
    s = num.toString(2); //이진 변환
    count++;
  }
  return [count, zero];
}
