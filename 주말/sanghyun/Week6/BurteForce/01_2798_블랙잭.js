let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let input = fs.readFileSync('./01_2798.txt').toString().trim().split('\n');

const solution = (income) => {
  let targetNum = Number(income[0].split(' ')[1]);
  let cardsArr = income[1].split(' ').map(el => Number(el));
  let allNumArr = []
  
  let indexOne = 1;
  let indexTwo = 2;

  for (let i = 0; i < cardsArr.length; i++) {
    if(i !== cardsArr.length - 1){
      let first = cardsArr[i];
      // console.log('처음 것: ' + first);
  
      for(let j = i + 1; j < cardsArr.length; j++){
        let second = first + cardsArr[j];
        // console.log(`두 번째는 ${second}`);
  
        for(let x = j + 1; x < cardsArr.length; x++){
          let third = second + cardsArr[x];
          // console.log(third);
          allNumArr.push(third);
        }
        
      }

    }

  }
  console.log(allNumArr.sort((a, b) => a - b).filter(el => el <= targetNum).pop());

}

solution(input);