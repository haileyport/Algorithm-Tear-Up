function solution(s) {
  let answer = "";
  let splitS = s.split(" ");

  for (let i = 0; i < splitS.length; i++) {
    for (let j = 0; j < splitS[i].length; j++) {
      answer +=
        j % 2 === 0 ? splitS[i][j].toUpperCase() : splitS[i][j].toLowerCase();
    }
    answer += " ";
  }

  return answer.slice(0, -1);
}
