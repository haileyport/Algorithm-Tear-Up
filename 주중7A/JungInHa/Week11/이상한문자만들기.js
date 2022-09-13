function solution(s) {
  let answer = [];
  const words = s.split(' ');
  
  words.forEach(word => {
    let weirdWord = '';
    for (let i = 0; i < word.length; i++) {
        weirdWord += (i % 2 === 0) ? word[i].toUpperCase() 
        : word[i].toLowerCase();
    }
    answer.push(weirdWord);
});

  return answer.join(' ');
}