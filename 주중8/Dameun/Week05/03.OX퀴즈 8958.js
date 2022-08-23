let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().trim().split('\n');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let inputNumber = input.slice(1)

for(let n of inputNumber){
    let point = 0;
    let result = 0;
    for(let m =0; m<n.length; m++){
        if(n[m] === 'O'){
            point++;
            // console.log(m);
        }else{
            point = 0;
        }
        result += point;
    }
    console.log(result);
}

//틀렸다고 나온다..왜? 