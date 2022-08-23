function solution(n, k) {
  var answer = -1;

  //양의 정수 n을 k진수로 변환
  //진수 변환한 수에서 조건에 맞는 수를 구하기
  //[211] 0 [2] 01010 [11]
  //각각 p0 / 0p0 / 0p 형태
  //-0p0-, p0, 0p, p(자릿수에 0이 없는 애)인 경우를 소수라고 함

  const convertNum = n.toString(k);

  if (convertNum.length === 1) {
    return 1;
  }

  let list = convertNum.split("0");
  //0으로 스플릿하면 01010은 어떻게 알아보지??

  list = list.filter((el) => {
    if (el.length !== 0 && el !== "1") {
      return el;
    }
  });

  //이게 맞나.... 이게머고....

  console.log(list);
  answer = list.length;

  return answer;
}

//정확성 85.7/100 으로 실패
