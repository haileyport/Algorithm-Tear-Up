const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);

if( A > B ){
    console.log(">");
}else if ( A < B ){
    console.log("<")
}else if( A === B ){
    console.log("==");
}

1234