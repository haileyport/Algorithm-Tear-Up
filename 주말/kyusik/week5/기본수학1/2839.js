const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim())//.split().map(num => Number(num));

let result = 0;
let fiveKilogram = 0;
let quotientArr = [];
for(let i = 0; 5 * i <= input; i++){
    
    if((input - (5 * i)) % 3 === 0){
        quotientArr.push((input - (5 * i)) / 3)
    } else {
        continue;
    }
    //console.log(quotientArr)
    fiveKilogram = i;
    console.log(fiveKilogram)
}
if(quotientArr.length === 0) {
    console.log(-1);
}else{
    result = fiveKilogram + quotientArr.pop();
    console.log(result);
}

/* 
인풋에서 5*0을 빼고 남은 값을 3으로 나눠서 나눠떨어지면 그 몫을 배열에 넣음
인풋에서 5*1을 빼고 남은 값을 3으로 나눠서 나눠떨어지면 그 몫을 배열에 넣음
인풋에서 5*2을 빼고 남은 값을 3으로 나눠서 나눠떨어지면 그 몫을 배열에 넣음
5*i 가 input보다 커질때까지 반복
배열의 맨 마지막 숫자와 i를 더한 값이 답
만약 배열의 길이가 0이라면 -1 리턴
*/