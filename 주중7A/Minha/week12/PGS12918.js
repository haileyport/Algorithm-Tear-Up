function solution(s) {
  if (s.includes("e")) return false;
  return (s.length === 4 || s.length === 6) && !isNaN(s) ? true : false;
}