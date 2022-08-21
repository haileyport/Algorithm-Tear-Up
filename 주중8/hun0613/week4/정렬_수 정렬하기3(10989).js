let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

/*
    * 버블정렬(bubble sorting) 사용

    1. for i는 0부터 input의 길이까지
        1-1. for j는 0부터 input - i 까지 // 버블소팅이 돋때마다 우측 끝에 가장 큰 수가 자리잡기 때문
            1-1-1. 만약, input[j] > input[j + 1] 이라면,
                1-1-1-1. swap에 input[j + 1] 할당
                1-1-1-2. input[j+1] = input[j]
                1-1-1-3. input[j] = swap

    2. for i는 0부터 input 길이까지
        2-1. console.log(input[i])
*/
// let count = 0;

for (let i = 1; i < input.length; i++){
    // console.log(input[i]);
    for (let j = 1; j < input.length - i; j++){
        // console.log('첫번째: ' + input[j], '두번째: ' + input[j+1])
       if (parseInt(input[j]) > parseInt(input[j + 1])){
            let swap = input[j + 1];
            input[j + 1] = input[j];
            input[j] = swap;
            // console.log(count)
            // console.log('첫번째: ' + input[j], '두번째: ' + input[j+1])
       } 
    }   
}

input.slice(1).forEach((el)=>{
    console.log(el);
})