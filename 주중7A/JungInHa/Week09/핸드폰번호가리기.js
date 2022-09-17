function solution(phone_number) {
  const idx = phone_number.length - 4;
  
  const hiddenNum = phone_number.substring(0, idx).replace(/[0-9]/g,'*')
  const lastFour = phone_number.substring(idx);
  
  let answer = hiddenNum + lastFour;
  return answer;
}