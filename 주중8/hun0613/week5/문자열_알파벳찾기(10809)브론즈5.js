// memory : 9336KB
// time : 136ms
// 풀이시간 : 10분


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

// check.1 : 문자열을 입력받아서 a~z 중 문자열에 있으면 해당 인덱스, 없으면 -1 (indexOf)
// check.2 : a~z의 유니코드는 97~122 (fromCharCode()사용)


// 1. for문으로 i는 97부터 122까지 순회하면서
    // 1-1. res에 input.indexOf(fromcharCode(i)) push
// 2. join(' ')

let res = [];

for (let i = 97; i <= 122; i++){
    res.push(input.indexOf(String.fromCharCode(i)));    
}

console.log(res.join(' '));