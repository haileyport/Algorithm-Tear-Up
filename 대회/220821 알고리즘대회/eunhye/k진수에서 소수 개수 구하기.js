function solution(n, k) {
  var answer = 0;

  //양의 정수 n을 k진수로 변환
  //진수 변환한 수에서 조건에 맞는 수를 구하기
  //[211] 0 [2] 01010 [11]
  //각각 p0 / 0p0 / 0p 형태
  //-0p0-, p0, 0p, p(자릿수에 0이 없는 애)인 경우를 소수라고 함

  const convertNum = n.toString(k).split("0");

  const isPrime = (num) => {
    //진짜 소수 구하는 문제...
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  convertNum.forEach((item) => {
    isPrime(item) ? answer++ : answer;
  });

  return answer;
}

//성공!
