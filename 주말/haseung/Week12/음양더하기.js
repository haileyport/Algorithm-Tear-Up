function solution(absolutes, signs) {
  // signs의 길이는 absolutes의 길이와 같습니다
  //signs[i]가 false면 absolutes의 요소를 음수로 바꾸고, true면 그대로
  let result = 0;
  signs.map((sign, i) => {
    if (sign === false) {
      //absolute의 요소를 음수로
      result += absolutes[i] * -1;
    } else {
      //그대로
      result += absolutes[i];
    }
  });
  return result;
}

console.log(solution([1, 2, 3], [false, false, true]));
