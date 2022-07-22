let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);;
//let input = require('fs').readFileSync('예제.txt').toString().split('\n');
//console.log(input)//['150', '266', '427']

let mulNum = String(input[0] * input[1] * input[2]);
//console.log(mulNum) //17037300

//0부터 9까지 숫자 세기
for(let i = 0 ; i <= 9; i++){
  let count = 0;
  for(let j = 0; j < mulNum.length; j++){
    //만약에 i번째 숫자가 있으면 카운터 올려주기
    if(i === Number(mulNum[j])){
      count++
    }
  }
  //i가 9될때까지 console찍기
  console.log(count);
}
