let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = +input[0];
let count = 0;
for(let i=1; i<=n; i++){
    let str = input[i];
    let arr = [];
    let ifCount = true;
    for(let j=0; j<str.length; j++){
        if(arr.indexOf(str[j]) === -1){
            arr.push(str[j])
        } else {
            if (arr.indexOf(str[j])!==arr.length-1) {
                ifCount = false;
                break;
            }
        }
        
    }
    if (ifCount) {
        count++;
    }
}
console.log(count);