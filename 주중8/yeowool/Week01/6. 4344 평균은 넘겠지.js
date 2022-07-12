const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

// 한 반의 평균점수 구하기
// 그 평균점수 이준 이상 점수 몇몇인지 구하기
// 전체 명수에 비해 평균이상 학생의 비율이 어떻게 되는지 구하기

let clacssNum = Number(input[0]);
let smartStudent = 0;
let classAver = 0;
let classSum = 0;
for(let i=1; i<= input.length; i++){ 
    let clacss = [];
    
    clacss = input[i].split(' '); // 각 반과 점수가 세트가 되어 하나의 요소가 되도록 한다.
    
    for(let j=1; j<=n; j++){
        classSum += clacss[j]; // 반의 제일 첫번째 index를 제외한 나머지를 모두 더한다.
    }
    classAver = classSum/clacss[0];
    for(let a = 1; a <= clacss[0]; a++){
       if(clacss[a]>classAver){
          smartStudent++;
       }
   }
}
    console.log(((smartStudent/clacss[0])*100).toFixed(3)+"%");