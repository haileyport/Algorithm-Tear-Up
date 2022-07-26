let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
//let input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'ze']
let count = 0;

for(let i = 0; i < croatia.length; i++){
    if(input[0].includes(croatia[i])){
        count ++
        input[0] = input[0].replace(croatia[i], ' ');
    }

}
//console.log(result) //3
//console.log(input[0].split(' ').join('').length) // e  ak //3
let answer = count + input[0].split(' ').join('').length
console.log(answer)
