// memory : 9360KB
// time : 128ms
// 풀이시간 : 26분


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('');

// check.1 : input의 문자열 중 크로아티아 알파벳이 몇개있냐?
// check.2 : 크로아티아 문자열은 ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

// 1. croatiaAlphabet에 ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='] 할당
// 2. for문으로 i는 0부터 input.length-1 보다 작을 때까지
    // 2-1. 만약 croatiaAlpahbet.include(input[i].concat[input[i+1]]) 가 true라면
        // 2-1-1. splice로 해당 문자열(2개) 삭제
        // 2-1-2. count += 1;
    // 2-2. 만약 input[i].concat[input[i+1]] === 'dz'이고 input[i+2] === '='이라면
        // 2-2-1. splice로 해당 문자열 (3개) 삭제
        // 2-2-2. count += 1;
    // 2-3. 그렇지않으면
        // 2-3-1. i++

const croatiaAlpahbet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;

for (let i = 0; i < input.length -1;){
    // console.log(input[i].concat(input[i+1]));
    // console.log(input)
    if (croatiaAlpahbet.includes(input[i].concat(input[i+1]))){
        input.splice(i,2)
        count += 1;
        // console.log(input)
    }

    else if (input[i].concat(input[i+1]) === 'dz' && input[i+2] === '='){
        input.splice(i,3)
        count += 1;
        // console.log(input)
    }

    else {
        i++;
    }

}

// console.log(count);
// console.log(input.length);

console.log(count + input.length)



