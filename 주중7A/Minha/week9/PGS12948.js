function solution(phone_number) {
  var answer = '';
  let back = phone_number.slice(-4);
  let front = '*'.repeat(phone_number.length - 4);
  answer = front + back;
  return answer;
}