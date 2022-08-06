let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./10_1316.txt').toString().trim().split('\n');

let count = 0;
let prompt = ''
for (let i = 1; i <input.length; i++){
  console.log('이번에 조회할 것: ' + input[i])
  if(input[i].length < 3){
    count++
    console.log('길이가 2이하? :' + count)
  }else if(input[i].length > 2){
    let uniqueLegnth = [... new Set(input[i])].length
    console.log('유니크 값: ' + [... new Set(input[i])])
    if(uniqueLegnth === input[i].length){
      count++
      console.log('유니크값이랑 인풋값 길이가 같아?: ' + count);
    }else{ // tttdef
      console.log('고유값이 일치하지 않으니까')
      for(let j = 0; j < input[i].length; j++){
        if(j === 0){
          prompt += input[i][j];
          console.log('초기값' + prompt)
        }else if(j > 0){
          if (input[i][j-1] === input[i][j]){
            console.log('이전값' + input[i][j-1]);
            console.log('현재값' + input[i][j]);
            prompt += input[i][j];
            console.log('쌓인 값' + prompt);
          }else if (input [i][j-1] !== input[i][j]){
            if(prompt.length > 1){
              count++;
              console.log('누적 카운트: ' + count);
              prompt = input[i][j];
              console.log('카운트 후 초기화값: ' + prompt)
            }else{
              prompt = '';
              console.log('초기화값: ' + prompt)
            }
          }
        }
      }
    }
  }
}
console.log(count);
