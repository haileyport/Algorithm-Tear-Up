let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
let arr = []
let arrValue = input.slice(1);

for(let n of arrValue){
    let arrV = n.trim().split(' ');
    arr.push(arrV.map(Number))
}

for(let n = 0; n<arr.length; n++){

    let replaceBigNumber = arr[n].sort(function(a,b){
        return (Number(a)-Number(b))
     })
}