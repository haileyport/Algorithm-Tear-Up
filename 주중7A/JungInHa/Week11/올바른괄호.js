function solution(s){       
  let count = 0;
  const len = s.length;

  for (let i = 0; i < len; i++) {
      (s[i] === '(') ? count++ : count--;
      if (count < 0) return false;
  }
  
  return count === 0;
}