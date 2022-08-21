const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = parseInt(fs.readFileSync(filePath).toString().trim())//.split('\n').map(n => Number(n));

//console.log(input);
let divider = 2;
let resultArr = [];
while(input >= 2){
    if(input % divider !== 0){
        divider++;
    }else{
    input = input / divider
    resultArr.push(divider);
    }
    //console.log(input, divider);
}
console.log(resultArr.join('\n'));