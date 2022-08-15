let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testCase = input.shift()

const xy = input.map(v=>v.split(' ').map(x=>+x))
//map x => +x 를 해주지 않으면 틀림처리됨 음수처리
const result = xy.sort((a,b)=>{
  if(a[1]>b[1]){
    return 1;
  }else if(a[1]<b[1]){
    return -1;
  }else{
    return a[0]-b[0]
  }
})
  console.log(result.map(v=>v.join(' ')).join('\n'))