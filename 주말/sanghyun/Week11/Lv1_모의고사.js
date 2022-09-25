function solution(answers){
  let supo = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  
  let result = []
  for(let i = 0 ; i < supo.length; i++){
      let supoPattern = supo[i].length
      let check = answers.filter((el, ind) => el === supo[i][ind % supoPattern]).length;
      result.push(check)    

  }
  const answer = [];
  const maxValue = Math.max(...result);
  console.log('result', result);
  console.log(maxValue);
  let index = 0;
  for (let i = 0; i < 3; i++) {
      if (maxValue === result[i]) {
      answer[index] = i + 1;
      index++;
      }
  }
  return answer;
}


// function solution(answers) {
//     let supo = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

//     // 답안의 길이를 구한다
//     let answerLength = answers.length;

//     // 답안의 길이만큼 수포자들의 답을 반복시킨 답안지를 생성한다
//     let submit = [[], [], []];

//     for(let i = 0; i < supo.length ; i++){
//         let eachSupoLength = supo[i].length;
//     let cnt = 0;
//     let eachAnswer = []
//         if(answerLength > eachSupoLength){
//       let times = Math.ceil(answerLength / eachSupoLength)
//       while(cnt < times){
//         eachAnswer.push(...supo[i])
//         cnt++
//       }
//     }else{
//       eachAnswer.push(...supo[i])
//     }
//     submit[i].push(...eachAnswer);
//     }

//     let result = [];
//     for (let i = 0; i < submit.length; i++){
//     let checking = answers.filter((el, j) => el === submit[i][j]).length;
//     console.log(checking);
//     if(checking !== 0){
//       result.push(checking);
//     }
//     }
//     // console.log(result);
//     return (Array.from(Array(result.length).keys()).sort((a, b) => a - b).map(el => el + 1));


// }



