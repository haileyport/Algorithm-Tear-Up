let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./04_2675.txt').toString().trim().split('\n');

let result = '';
for(let i = 1; i < input.length; i++){
  let repeater = Number(input[i].split(' ')[0]);
  let wordy =  input[i].split(' ')[1].split('').map(el => el.repeat(repeater)).join('')
  if(i === input.length - 1){
    result += wordy
  }else{
    result += wordy + '\n';
  }
}
console.log(result);

