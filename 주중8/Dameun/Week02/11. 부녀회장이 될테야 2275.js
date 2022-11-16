let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = input[0]
let people = 0;

// a층 b호에 사는 사람은 
// a-1층의 1호부터 b호까지의 사람이 살아야 한다 
// K층에 N호에 사는 사람은 
// 1부터 N까지 더한 값 +
// 1부터 N-1까지 더한 값
// 1부터 N-2까지 더한 값..... 해서 1 
for(let i = 1; i <= Number(count); i++){
    let numberK = input[2*i - 1];
    let numberN = input[2*i];
    return numberK, numberN;
}

if(numberK === 0){
    console.log(numberN);
}
for(let n = 1; n <= numberN; n++ ){
    people += n
}