function solution(phone_number) {
  let result = "";
  //거꾸로?
  //뒷 4자리를 제외한 나머지는 다 *으로 가리기 - replace
  result = phone_number.slice(0, -4).replace(/[0-9]/g, "*") + phone_number.slice(-4);
  return result;
}
