function solution(phone_number) {
  let answer = "";

  const length = phone_number.length;
  for (let i = 0; i < length; i++) {
    answer += i >= length - 4 ? phone_number[i] : "*";
  }

  return answer;
}
