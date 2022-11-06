function solution(s) {
  let number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  //replace 사용해보기
  let result = s;
  let num = 0;
  for (let n of number) {
    let regex = new RegExp(n, "g");
    result = result.replace(regex, num);
    num++;
  }
  return Number(result);
}

solution("23four5six7");

//1점
//30분
//정규표현식에 대한 연습이 필요하다
//변수를 정규 표현식에 할당하는 방법을 아는지 묻는 문제
//단, replce시 할당이 되지 않아서 새로운 result로 저장이 필요하다!
