let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().split('\n');

let test = input[0]; //5

for(let i = 1; i <= test; i++){
  // console.log(input[i]);
  // OOXXOXXOOO
  // OOXXOOXXOO
  // OXOXOXOXOXOXOX
  // OOOOOOOOOO
  // OOOOXOOOOXOOOOX
  //count를 올려주고 sum에 채워주기
  let count = 0;
  let sum = 0;
  for(let j = 0; j < input[i].length; j++){
    //console.log(input[i][j]);
    if(input[i][j] === 'O'){
      count++ 
    }else{
      count = 0;
    }  
    sum += count //1 2 1 1 2 3
  }  
  console.log(sum)
}
