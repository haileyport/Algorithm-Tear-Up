//100이하일땐 어짜피 한번은 도니까 추가 ,100이상이면 모르니까 a-b =b-c링 깉은지보면댐
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();



function fr(input){
    let count = 0;
    for(let i = 1;  i <= input; i++){
        if(i < 100){
            count ++;
        }else if(i <= 1000){
           let inum = i.toString();
            if(inum[0]-inum[1] === inum[1]-inum[2]){
                count ++;
            }
        }
    }
    console.log(count);
}
fr(input);
