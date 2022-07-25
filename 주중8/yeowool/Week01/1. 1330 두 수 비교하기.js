const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (line) { // 입력값 불러온다.
    const input = line.split(' '); // 입력받은 값을 공백 기준으로 나눈다.

    const A = Number(input[0]); 
    const B = Number(input[1]); // 앞의 숫자를 A에 할당하고 뒤의 숫자를 B에 할당한다.

   if(A > B) {
        console.log(">") 
    } else if(A < B) {
        console.log("<")
    } else if(A === B) {
        console.log("==") 
    }  // A와 B를 비교하여 if문을 통해 조건에 맞는 부등호를 출력한다.

    rl.close();
}).on('close', function () {
    process.exit();
});