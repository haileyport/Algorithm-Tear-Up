let fs = require('fs');
let input = fs.readFileSync('input.txt').toString();


/* 
주어진 수가 10보다 작다면
    -앞에 0을 붙여 두자리 수로 만들고, 각 자리의 숫자를 더한다.

각 자리의 숫자를 더한다.
새로운 수 = '주어진 수의 가장 오른쪽 자리' + '더한 값의 가장 오른쪽 자리'

위의 내용 반복 -> count += 1;

만약 새로운 수 === 주어진 수
    - return count
*/

// 주어진 수
const num = input.trim(); // input에 \n 같은 공백이 따라왔을 수도 있기 때문에 trim으로 공백을 제거해준다.
let sumNum = '';
let newNum = '';
let count = 0;

// 10보다 작은지 판별
if(Number(num) < 10){

    sumNum = '0' + num;        
    newNum = num + sumNum[1];
    count += 1;

}else{

    sumNum = String(Number(num[0]) + Number(num[1]));

    if(Number(sumNum) < 10){
        sumNum = '0' + sumNum;
    }

    newNum = num[1] + sumNum[1];
    count += 1;
}



while(Number(num) !== Number(newNum)){
    sumNum = String(Number(newNum[0]) + Number(newNum[1]));

    if(Number(sumNum) < 10){
        sumNum = '0' + sumNum;
    }

    newNum = newNum[1] + sumNum[1];
    count += 1;
}

console.log(count);
