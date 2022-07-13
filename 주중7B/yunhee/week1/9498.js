/* 9498번 시험 성적 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

if(input >= 90 && input <= 100){
    console.log("A");
}else if(input >= 80 && input <= 89){
    console.log("B");
}else if(input >= 70 && input <= 79){
    console.log("C");
}else if(input >= 60 && input <= 69){
    console.log("D");
}else{
    console.log("F");
}