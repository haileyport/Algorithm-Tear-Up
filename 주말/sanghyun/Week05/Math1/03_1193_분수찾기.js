let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();
let input = fs.readFileSync('./03_1193.txt').toString().trim();

let n = Number(input)
let acc = 1; // 늘어나는 다음 배열 요소들의 개수
let groupChecker  = 1; // 이 범위 안에 있는지 체크
while(groupChecker < n){
  acc++
  groupChecker+= acc;
}

// console.log(acc);
// console.log(groupChecker);
// console.log(groupChecker - (acc));

let toStart = groupChecker - (acc);

if(acc % 2 === 0){
  let a = n - toStart //2
  let up = a;
  let down = acc - (a - 1) 
  console.log(`${up}/${down}`)
}else if (acc % 2 === 1){
  let a = n - toStart //2
  let down = a;
  let up = acc - (a - 1) 
  console.log(`${up}/${down}`)
}

// if(acc % 2 === 0){
//   for (let i = 1 ; i <= acc; i++){
//     let a = `${i}/${acc}`
//     toStart++
//     toStart === n ? console.log(a) : acc--
//   }
// }else if (acc % 2 === 1){
//   for (let i = 1 ; i <= acc; i++){
//     let a = `${acc}/${i}` // 3/1
//     toStart++ //4
//     toStart === n ? console.log(a) : acc--
//   }
// }

/*
let n = Number(input);
let acc = 1; // 열 카운트
let counter = 0; // n까지 카운트
let foundBool = false;
let a = ''

while(1){
  let beOrUp = acc; // 위 또는 아래에 넣을 것
  if(acc % 2 === 1){
    for(let i = 1; i <= acc ; i++){
      counter++;
      a = `${beOrUp}/${i} `
      if(counter === n){
        foundBool = true;
        break;
      }else{
        beOrUp--;
      }
    }
  }else if(acc % 2 === 0){
    for(let i = 1; i <= acc ; i++){
      counter++;
      a = `${i}/${beOrUp} `
      if(counter === n){
        foundBool = true;
        break;
      }else{
        beOrUp--;
      }
    }
  }
  if(foundBool === true){
    break;
  }else{
    acc++
  }
}
console.log(a);
*/