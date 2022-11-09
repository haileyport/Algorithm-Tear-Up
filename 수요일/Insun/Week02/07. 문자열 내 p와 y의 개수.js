function solution(s) {
  // p와 y의 개수 비교 => 같으면 true, 다르면 false, 하나도 없으면 true
  // 대문자와 소문자 구별 안함 => 대문자로 통일하면 될듯

  let char = s.toUpperCase().split("");

  if (char.indexOf("P") === -1 && char.indexOf("Y") === -1) return true;

  // 반복문을 돌면서 pArr에 p를 추가, yArr에 y를 추가
  // pArr와 yArr의 길이를 비교후 같으면 true, 다르면 false 리턴

  let pArr = [];
  let yArr = [];
  let isTrue = true;

  for (let i = 0; i < char.length; i++) {
    if (char[i] === "P") {
      pArr.push(char[i]);
    } else if (char[i] === "Y") {
      yArr.push(char[i]);
    }
  }
  return pArr.length === yArr.length ? isTrue : !isTrue;
}
