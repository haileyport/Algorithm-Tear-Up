let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let N =Number(inputs)
let i = 0
let count = 0;
while(true){
  
         if(N%5===0){
             count =count + N/5
             break}
        N = N-3
        count += 1
     
         i++
   if (N < 0) {
    count = -1
    break
  }


}
console.log(count)