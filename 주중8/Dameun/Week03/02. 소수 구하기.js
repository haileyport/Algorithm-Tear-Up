let fs = require('fs');
let input = fs.readFileSync('test.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let startNumber = Number(input[0]);
let finishNumber = Number(input[1]);


    //시간 제한이 있으므로 제곱근까지만 계산
    //제곱끈까지만 에라토스테네스의 체로 소수를 구한다 < 
    //2는 소수이므로 2는 제외한다 
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
//https://gent.tistory.com/294
//너무 풀리지 않아 참고하였습니다. 

function primeFactor(n,m){
    let arr = Array(m+1).fill(true).fill(false, 0, 2)
    for(let i =2; i*i <= m; i++){ //i는 4까지 
        if(arr[i]){//2부터 배수인 것을 판별
            for(let j = i * i; j <= m; j+=i){//4부터 시작, i만큼인 2씩 더해지면서 그 값들을 모두 false로 
                arr[j] = false;
            }
        }
    }
    arr.fill(false,0,n);
    for(let x in arr){
        if(arr[x]){
            console.log(Number(x));
        }
    }
}

let result = primeFactor(Number(input[0]),Number(input[1]))

//102044KB
//4188ms....
