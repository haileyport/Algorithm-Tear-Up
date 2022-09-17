const input = require("fs").readFileSync("/dev/stdin").toString().trim();

//13 3개 12를 넘겼으니 58은 5개 60밑이므로
//즉 6의배수로 구하면될듯?
// 6+ 12+ 18 +24 count로 돌아가볼까 
let num = Number(input)//13


let i = 1;
let count = 1;

while(count < num){
  count +=  (6*i)// 2
  i++ 
}
console.log(i)