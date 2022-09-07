function solution(s) {
  let answer = [];
  const words = s.split(' ');
  
  words.forEach(word => {
      const weird = [...word].map((letter, idx) => {
          return (idx % 2 === 0) ? letter.toUpperCase() : letter.toLowerCase() 
      }).join('');
      answer.push(weird);
  });

  return answer.join(' ');
}