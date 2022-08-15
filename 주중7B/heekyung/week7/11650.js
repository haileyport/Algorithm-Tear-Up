let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const testCase = input.shift()

const xy = input.map(v=>v.split(' '))
const result = xy.sort((a,b)=>{
  if(a[0]>b[0]){
    return 1;
  }else if(a[0]<b[0]){
    return -1;
  }else{
    return a[1]-b[1]
  }
})
  console.log(result.map(v=>v.join(' ')).join('\n'))