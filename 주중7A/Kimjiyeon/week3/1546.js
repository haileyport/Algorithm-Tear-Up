let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let num = Number(input.shift());
let score = input.toString().split(' ');
score = score.map((i) =>Number(i));
let max = Math.max(...score);
const average = (...arr) =>{ 
    var output=0;
    for(let i=0; i<arr.length; i++){
        output += arr[i]
    }
    return output/num
    }
for(let i=0; i<num;i++){
    score[i]= score[i]/max*100; 
}
console.log(average(...score))
