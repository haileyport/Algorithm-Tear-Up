const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()
let count = 0
while(true){
    if(input%5===0){    //5의 배수라면
        console.log(input/5+count)
        break;
    }
    if(0>input){        //만들수 없는 수라면
        console.log(-1)
        break;
    }  
    input -= 3;         //3키로 포대씩 줄인다
    count++             //3키로 추가용
}