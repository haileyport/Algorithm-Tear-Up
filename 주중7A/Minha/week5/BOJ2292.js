// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')[0];
input -= 1; // 일단 1을 뺀다
if(input===0) console.log(1);
else{
  let q = Math.floor(input/6);
  let r = input % 6;
  let mulNum = 0;
  let sixs = () => {
    mulNum = 0;
    for (let i = 1; i <=1000000000/6; i++) {
      mulNum+=i;
      console.log("현재 mulnum:"+mulNum + " 현재 i: " + i);
      let threshold = 6 * mulNum;
      console.log(threshold);

      if(q<mulNum) return i;
      else if(q === mulNum && r===0) return i;
    }
    return mulNum;
  }

  console.log(sixs() + 1);
}