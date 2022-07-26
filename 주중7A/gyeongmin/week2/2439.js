let input = require('fs').readFileSync('/dev/stdin').toString();

let star = '';
let space = '';

//4 1
//3 2
//2 3
//1 4
//0 5

// i -> 1,2,3,4,5
for (let i = 1; i <= input; i++) {
    star += '*';
    // input - i -> 4,3,2,1,0
    for (let j = 0; j < input - i; j++) {
        space += ' ';
    }
    console.log(space + star);
    space = '';
}
