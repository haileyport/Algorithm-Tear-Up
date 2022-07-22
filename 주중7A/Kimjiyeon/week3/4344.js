let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split('\n');
let count = input.shift();
input = input.map((x)=>x.split(' '));
let data = input.map(arr=> arr.map(i=>Number(i)));

const average = (...arr) =>{ 
    var output=0;
    var num = arr[0]
    for(let i=1; i<arr.length; i++){
        output += arr[i]
    }
    return output/num
    }
let per = '';

for(let i= 0; i<count; i++){
    let sum=0;
    for(let j=1; j<data[i].length; j++){
        if(average(...data[i])<data[i][j]){
            sum++;
        }
        per = (sum/data[i][0])*100
    }
    console.log(per.toFixed(3)+'%')
}