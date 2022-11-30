function solution(s) {
  // s의 길이가 홀수라면, 가운데 글자를 반환
  // s의 길이가 짝수라면, 가운데 두 글자를 반환
  // 먼저 s의 길이가 홀수인지 짝수인지 분기 나눔
  // 길이를 2로 나눈 값의 인덱스를 찾으면 가운데 글자인거 아닐까?

  let char = s.split("");
  let mid = "";
  let length = char.length;

  if (char.length % 2 === 0) {
    // 길이가 짝수
    mid = char[length / 2 - 1] + char[length / 2];
  } else {
    // 길이가 홀수
    mid = char[Math.floor(length / 2)];
  }
  return mid;
}
