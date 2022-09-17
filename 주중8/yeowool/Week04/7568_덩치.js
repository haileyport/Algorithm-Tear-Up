// 부르트포스 7568_덩치 실패
// 난이도 : 실버5
// 풀이시간 : 분
// 메모리 : KB      
// 시간 :   ms      
// 코드길이 :  B

// 키와 몸무게가 크면 당연히 높은 순위로 올라간다
// 몸무게만 크거나 키만 클 경우에는 우열을 가리지 않고 동등한 순위가 된다.
// 키와 몸무게를 index번호로 가져올 수 있도록 해서 for문으로 돌아가면서 비교 해 보면 되지 않을까?

// 1. 배열의 첫번째는 순위 매길 사람의 명수니까 index번호 1번부터 끝번까지 배열을 따로 arr담는다.
// 2. 이중 for문으로 배열을 각각 비교하면서 for문 안에서 if문으로 각배열의 몸무게와 키로수를 비교한다
// 3. 비교 할 때 마다 덩치가 클 경우 1을 더하고 공백을 더해준다
// 4. ...?


// let fs = require('fs');
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = ["5","55 185", "58 183", "88 186", "60 175", "46 155"]
let arr = input.slice(1, input.length);
let result = "";
let count = 0;

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j <arr.length; i++) {
        if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
            count += Number(1) + " ";
        }
    }
    return result.push(count);
}

console.log(result);