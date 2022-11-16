function solution(survey, choices) {
  let answer = '';
  const char = ["R", "T", "C", "F", "J", "M", "A", "N"];
  let score = Array(8).fill(0);
  survey.forEach((el, index) => {
    let userChoice = choices[index];
    if (userChoice <= 3) {
      let addingScore = 0;
      if (userChoice === 1) addingScore = 3;
      else if (userChoice === 2) addingScore = 2;
      else addingScore = 1;
      score[char.indexOf(el[0])] += addingScore //1->3 2->2 3->1
    }
    else if (userChoice >= 5) {
      score[char.indexOf(el[1])] += userChoice - 4 //5->1 6->2 7->3
    }

  })

  for (let i = 0; i < 8; i += 2) {
    //상반되는 두 유형이 같은 점수가 나오면 사전순으로 빠른 유형을 추가
    if (score[i] === score[i + 1]) {
      answer += char[i].charCodeAt(0) < char[i + 1].charCodeAt(0) ?
        char[i] : char[i + 1]

    }
    else answer += score[i] > score[i + 1] ? char[i] : char[i + 1];
  }
  return answer;

}