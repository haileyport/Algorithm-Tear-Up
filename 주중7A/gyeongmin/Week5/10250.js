let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let test = input[0];
for(let i = 1; i <= test; i++){
    let H = input[i].split(' ')[0]
    let W = input[i].split(' ')[1]
    let C = input[i].split(' ')[2]
    
    let floor = C % H;
    let room = Math.ceil(C / H);
    if (floor === 0) { 
    floor = H; 
      }
    if (room < 10) {
    room = '0' + room
  } 
    console.log(`${floor}${String(room).padStart(2, '0')}`)
}
