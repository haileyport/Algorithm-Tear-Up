let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let result = -1;
let C = Math.floor(input/5)

while(C >= 0){
    let remain = input - 5 * C;
    if(remain % 3 === 0){
        result = remain / 3 + C;
        break;
    }else{
       C -= 1;
    }
}
console.log(result);
