let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
//기본모듈틀을 사용
let num = Number(input[0]);//테스트케이스 갯수

 for(let i = 1; i <= num; i++ ){ //테스트케이스 줄 반복
   let count = 0; //0가 연속으로 있을때마다 점수가 올라가야함
   let sum= 0; //count값 넣기
        
  for(let j = 0 ; j < input[i].length; j++){
        if(input[i][j] === 'O'){
            count ++;//1추가
       }else {
          count= 0;
        }
       sum += count; 
    } 
 console.log(sum);
 }
