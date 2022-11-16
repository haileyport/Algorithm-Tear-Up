function solution(s) {
  let pCount = 0,
    yCount = 0;

  const lowerS = s.toLowerCase();

  for (let i = 0; i < lowerS.length; i++) {
    if (lowerS[i] === "p") pCount++;
    else if (lowerS[i] === "y") yCount++;
  }

  if (pCount === yCount) return true;
  else return false;
}
