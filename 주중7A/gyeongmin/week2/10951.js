const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i=0;
while(i<input.length-1){
    let nums = input[i].split(' ').map(x => Number(x));
    
    a = nums[0];
    b = nums[1];

    console.log(a+b);
    i++;
}
