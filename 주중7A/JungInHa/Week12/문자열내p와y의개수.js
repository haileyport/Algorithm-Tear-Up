function solution(s){
  const pNum = (s.match(/p/gi) || '').length;
  const yNum = (s.match(/y/gi) || '').length;
  return (pNum === 0 && yNum === 0) ? true : pNum === yNum; // -> pNum === yNum; 으로 쓰는게 낫다..!
}
