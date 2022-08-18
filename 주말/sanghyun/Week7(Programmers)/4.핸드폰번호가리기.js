function solution(a) {
  return '*'.repeat(a.substring(0, a.length - 4).length) + a.substring(a.length - 4, a.length)
  
  // let a = phone_number.length;
  // let b = "*".repeat(a-4) + phone_number.slice(-4);
  // return b;  
}