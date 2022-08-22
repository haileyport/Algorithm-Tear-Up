function test(){
  let input = require('fs').readFileSync('input.txt').toString().trim().split('\n');
  let a = new Set(input[1].trim().split(' '));
  let b = new Set(input[2].trim().split(' '));

  let aub = new Set([...a, ...b]);
  a.forEach(el => {
    if(b.has(el)) aub.delete(el); 
  })
  console.log(aub.size);
  
}

let start = new Date();  // 시작
test();
let end = new Date();  // 종료
console.log(end-start); // 

