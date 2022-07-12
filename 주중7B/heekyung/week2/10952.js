const input=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(i=0; i < input.length-1;i++){
    const number= input[i].split(' ').map(Number);
    console.log(number[0]+number[1])
}