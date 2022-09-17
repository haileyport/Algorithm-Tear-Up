const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
let count =parseInt(input.shift())    //손님수
//
for(let i=0; i<count;i++){
    let hwn = input[i].split(' ');
    let h = parseInt(hwn.shift());
    let w = parseInt(hwn.shift());
    let n = parseInt(hwn.shift());
    let floor = n%h===0? h: n%h;//
    let room = Number.isInteger(n/h)?n/h:Math.ceil(n/h)
    if(h<10||h>9){

        console.log(`${floor}0${room}`)
    }else{
        console.log(`${floor}${room}`)
    }
}