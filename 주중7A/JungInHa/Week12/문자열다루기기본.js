function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  s = s.replace(/e/g, 's'); 
  return +s == s;
}
