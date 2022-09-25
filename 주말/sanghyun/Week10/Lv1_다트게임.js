function solution(dartResult) {

  const regex = /\d{1,2}[SDT]{1}[*|#]?/g;
  let result = dartResult.match(regex);

  let score = [];
  for(let i = 0; i < result.length; i++){
    let sum = 0;
    let number = result[i].match(/\d+/g);
    let string = result[i].match(/[SDT]+/g);
    let special = result[i].match(/[*|#]/g);
    if(special === null){
      if(string[0] === 'S') sum = Number(...number)
      else if(string[0] === 'D') sum = Number(...number)**2
      else if(string[0] === 'T') sum = Number(...number)**3
      score.push(sum)
    }else{
      if(special[0] === '#'){
        if(string[0] === 'S') sum = Number(...number)*-1
        else if(string[0] === 'D') sum = (Number(...number)**2)*-1
        else if(string[0] === 'T') sum = (Number(...number)**3)*-1
        score.push(sum)
      }else if (special[0] === '*'){
        if(string[0] === 'S'){ 
          sum = Number(...number)*2
        }
        else if(string[0] === 'D'){
          sum = (Number(...number)**2)*2
        }
        else if(string[0] === 'T'){
          sum = (Number(...number)**3)*2
        }
        score[i-1] = score[i-1]*2
        score.push(sum)
      }
    }
  }
  return (score.reduce((a, b) => a + b));
}
solution("10S1S0S*")