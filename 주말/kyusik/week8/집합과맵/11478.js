const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const arr = [];

for(let j = 0; j < input.length; j++){
    for(let i = 0; i < input.length; i++){
        arr.push(input.slice(i, i + 1 + j));
    }
}

const result = new Set(arr);

console.log(result.size);

/*
//1자
[0] [1] [2] [3] [4]

//2자
[0]+[1] [1]+[2] [2]+[3] [3]+[4]

//3자
[0]+[1]+[2] [1]+[2]+[3] [2]+[3]+[4]

//4자
[0]+[1]+[2]+[3] [1]+[2]+[3]+[4]

//5자
[0]+[1]+[2]+[3]+[4] 
*/