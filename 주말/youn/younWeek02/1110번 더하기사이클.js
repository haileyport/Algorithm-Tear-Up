//10보다 작을 경우 0을붙여 두자리로 만들고 각자리 숫자를 더한다
//2+6= 8 6+8=14 8+4=12 4+2 =6 새로운 수는 26 이사이클은 4번돔
//즉 =의 값과 그앞의 값을 더해주면서 처음값이 나오게 해야하는것
let fs =require('fs')
let input = require('fs').readFileSync('/dev/stdin').toString();
let num = Number(input)

let result = 0//초기화

  while(true){//식
      let sum = Math.floor(input/10)+(input%10)//6//십의자리,일의자리
        input = (input%10)*10 + (sum%10)
      result++
        if(num === input) break;
  }
        console.log(result)
  //마지막 =이 처음과 같을때 반복된 횟수가 답임  반복횟수를 모르니 while문을 사용한다

   