function solution(s) {
  var answer = "";
  const word = s.split(" ");
  word.map((el) => {
    for (i in el) {
      if (i % 2 === 0) {
        answer += el[i].toUpperCase();
      } else {
        answer += el[i].toLowerCase();
      }
    }
    answer += " ";
  });
  answer = answer.slice(0, answer.length - 1);
  return answer;
}
