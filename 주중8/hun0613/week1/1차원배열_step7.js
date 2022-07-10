let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim();

/*
    0. testCase 이름 : 성적 배열로 이루어질 빈객체 scoreSet 선언
    0. 전체 총점을 할당할 total 변수 선언
    0. 총 인원 수를 할당할 members 변수 선언
    0. 평균을 할당할 avg변수 선언
    0. 평균보다 높은 사람의 수를 할당할 count 변수 선언 후 0으로 초기화
    0. 비율을 저장할 rate변수 선언

    1. testCase = \n기준으로 split
        : 0번째 원소는 총 케이스 개수

    2. for문으로 1번부터 testCase순회하면서 scoreSet[i] = testCase[i]
        : scoreSet[i]의 0번째 원소는 케이스별 성적 개수
    
    3. for문으로 1번부터 scoreSet를 순회하면서
    3. for문으로 total = total + scoreSet[i][j]
    3-1. avg = (total / scoreSet[i][0])
    3-2. for문으로 1번부터 scoreSet[i][j]를 돌면서
    3-2-1. 만약, avg보다 scoreSet[i][j]가 크다면
    3-2-2. count += 1
    3-3. rate = (count / scoreSet[i][0]) * 100
    3-3. console.log(rate.toFix(3) + '%')




    ** 삭제 **
    3-1. for문으로 1번부터 scoreSet를 순회하면서 members = members + scoreSet[i][0] 
    3-2. for문으로 total = total + scoreSet[i][j]
    
    4.avg = total / members

    5. for문으로 1번부터 scoreSet[i]순회 하면서
    5-1. for문으로 1번부터 만약, avg < scoreSet[i][j]라면, count += 1
    5-2. 첫번째 for문에 rate = (count / Number(scoreSet[i][0])) * 100
    5-3. console.log(rate.toFixed(3))
    ** 삭제 **
    




*/

// console.log(5/3);

// 0.
let scoreSet = {};
let rate = 0;
// let members = 0;
let total = 0;
let avg = 0;
let count = 0;

// 1.
let testCase = input.split('\n');

// 2.
for(let i =1; i < testCase.length; i++){
    scoreSet[i] = testCase[i].split(' ');
}

// 3.
for(let i = 1; i <= Object.keys(scoreSet).length; i++){
    // members = members + Number(scoreSet[i][0]);
    for(let j = 1; j < scoreSet[i].length; j++){
        total = total + Number(scoreSet[i][j]);
        // console.log(j, scoreSet[i][j], total);
    }
    avg = total / scoreSet[i][0]

    for(let j = 1; j < scoreSet[i].length; j++){
        if(avg < scoreSet[i][j]){
            count += 1;
        }
        // console.log(scoreSet[i][j], count);
    }

    rate = (count / Number(scoreSet[i][0])) * 100;
    console.log(rate.toFixed(3) + '%');
    total = 0;
    count = 0;
    rate = 0;



}

// // 4.
// avg = total / members;


// // 5.
// for(let i = 1; i <= Object.keys(scoreSet).length; i++){
//     for(let j = 1; j < scoreSet[i].length; j++){
//         if(avg < Number(scoreSet[i][j])){
//             count += 1;
//         }
//     }
//     rate = (count / Number(scoreSet[i][0])) * 100;
//     // console.log(rate.toFixed(3));
//     count = 0;
// }

// console.log(avg);
// console.log(total);

// console.log(total);


