const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const coordinateArr = [];

for(let i = 1; i < input.length; i++){
    coordinateArr.push(input[i].split(' ').map(el => parseInt(el)));
}

let result = '';
coordinateArr.sort((a, b) => {
    if(a[1] !== b[1]){
        return a[1] - b[1];
    }
    return a[0] - b[0];
})
coordinateArr.forEach(el => {result = result + `${el[0]} ${el[1]}\n`});

console.log(result);