let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./05_10250.txt').toString().trim().split('\n');

function solution(income){
  let result = '';
  for (let i = 1; i < income.length; i++){
    // console.log(income[i]);
    let splited = income[i].split(' ');
    let h = Number(splited[0]); //6
    let w = Number(splited[1]); //12
    let n = Number(splited[2]); //10

    // 일단 나눠보자
    if (Number.isInteger(n / h)){
      let roomNum = n / h; 
      if(roomNum < 10){
        result += `${h}0${roomNum}\n`
      }else{
        result += `${h}${roomNum}\n`
      }
    }else{
      let roomNum = Math.floor(n / h) + 1;
      let floor = n % h;
      if(roomNum < 10){
        result += `${floor}0${roomNum}\n`
      }else{
        result += `${floor}${roomNum}\n`
      }
    }
 
  }
  console.log(result);
}
solution(input)