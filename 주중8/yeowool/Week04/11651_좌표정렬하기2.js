// 정렬 11651_좌표정렬하기2 정답은 구했으나 실패
// 난이도 : 실버5
// 풀이시간 : 
// 메모리 :  KB      
// 시간 :   ms      
// 코드길이 :  B

//두개의 인자를 비교하여 sort로 오름차순 정렬하기
// 첫번째 index를 비교해서 정렬한 후 정렬된 배열을 다시 두번째 index를 sort해서 재정렬한다

// const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// let nums = input.slice(1, input.length).sort((a, b) => a[0] - b[0]);
// let result = nums.sort((a, b) => a[1] - b[1]);

// console.log(result);

// 먼저 y기준으로 해야한다는 것을 누락하고 풀이했다

// sort안에서 if문으로 y와 같은지 여부를 판단하여 다를 경우 y기준으로 정렬하고 같으면 x기준으로 정렬한다


// const fs = require("fs");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ["5","0 4","1 2","1 -1","2 2","3 3"]
// let nums = input.slice(1, input.length)
// let newArr = []
// for(let i = 0; i < nums.length; i++) {
//     newArr = nums[i].split(" ")
// }
// return newArr

// => 끝의 3,3만 불러옴


const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ["5","0 4","1 2","1 -1","2 2","3 3"]
let nums = input.slice(1, input.length)
let newArr = []
for(let i = 0; i < nums.length; i++) {
    newArr.push(nums[i].split(" ").map(newNum => parseInt(newNum)));
}
// 0:  [0, 4]
// 1:  [1, 2]
// 2:  [1, -1]
// 3:  [2, 2]
// 4:  [3, 3]

newArr.sort((a, b) => {
    if(a[1] !== b[1]) {
        return a[1] - b[1];
    } else { 
        return a[0] - b[0];
    }
});

// 0:  [1, -1]
// 1:  [1, 2]
// 2:  [2, 2]
// 3:  [3, 3]
// 4:  [0, 4]