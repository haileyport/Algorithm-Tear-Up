// let fs = require('fs');
// let input = fs.readFileSync('test.txt').toString().split(' ');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');


//셀프 넘버 
//1부터 시작해서 각 정수로 무한 수열을 만든다.
//배열을 하나 만들고, 그 배열에 없는 값이라면 push로 추가한다.
//10000보다 작은 수 중 그 배열에 해당되는지 확인한다. 
//그 수열에 값에 포함되는 수는 콘솔 로그로 출력하지 않는다
let nonSelfNumber = [];
let nonSelf = 0;
let newNumber = 0;
let result = 0;

for (let i = 1; i <= 5; i++) {
    result = String(i);
    for (let n = 0; n < result.length; n++) { //왜 for of이 되지 않을가..
        newNumber += parseInt(result[n])
    }
    nonSelf = newNumber + i

    while (nonSelf <= 10) {
        if (nonSelfNumber.indexOf(nonSelf) === -1) {
            nonSelfNumber.push(nonSelf);
        }
        result = String(nonSelf)
        for (let m = 0; m < result.length; m++) {
            newNumber += parseInt(result[m])
        }
        nonSelf = newNumber + i
    }
    if (nonSelfNumber.indexOf(result) === -1) {
        console.log(result);
    }

}

console.log(nonSelfNumber);

