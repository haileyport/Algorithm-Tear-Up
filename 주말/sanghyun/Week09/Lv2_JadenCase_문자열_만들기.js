function solution(s) {
  var answer = [];
  let a = s.split(' ');
  for(let i = 0; i < a.length; i++){
      let prompt = ''
      for(let j = 0; j < a[i].length; j++){
          if(j === 0){
              prompt = prompt + a[i][j].toUpperCase();
          }else{
              prompt = prompt + a[i][j].toLowerCase();
          }
      }
      answer.push(prompt);
  }
  return (answer.join(' '))

}