const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = input.shift();
//console.log(t);

for (let i = 0; i < t; i++) {
    let result = '';
    
    const [r, str] = input[i].split(" ");
    console.log([r, str]);

    for (let j = 0; j < str.length; j++) {
        for (let c = 0; c < r; c++) {
            result += str[j];
  	}
    }
    
    console.log(result);
}