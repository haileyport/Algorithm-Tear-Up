function solution() {
  // 셀프넘버 : 양의 정수 n에 대해서 d(n)을 n 과 n의 각 자리수를 더하는 함수
  // d(75) = 75 + 7 + 5 = 87
  // 33으로 시작한다면 다음 수는 33 + 3 + 3 = 39이고,
  // 그 다음 수는 39 + 3 + 9 = 51, 다음 수는 51 + 5 + 1 = 57이다.
  // 33, 39, 51, 57, 69, 84, 96, 111, 114, 120, 123, 129, 141, ...
  // 33은 39의 생성자이고, 39는 51의 생성자, 51은 57의 생성자이다.

  // 생성자가 없는 숫자 = 셀프넘버
  // 셀프넘버를 한줄에 하나씩 출력

  const range = 10000;

  // sefNumber 가 아닌 숫자를 생성
  function notSelfNumber(num) {
    // i 를 split
    const splited = String(num).split('').map(Number);

    // 문자열로 나눠진 수를 숫자형으로 변환

    // 초기 숫자와 나눠진 수의 합을 sum 에 할당
    let sum = num + splited.reduce((a, b) => a + b);

    return sum;
  }

  // range 길이 만큼의 배열 생성해서 true 할당
  const numberArray = new Array(range).fill(true);

  for (let i = 1; i <= range; i++) {
    // numberArray에서 selfNumber 가 아닌 수는 false 로 재할당
    numberArray[notSelfNumber(i)] = false;

    // true 일 경우만 출력
    if (numberArray[i]) {
      console.log(i);
    }
  }
}

solution();
