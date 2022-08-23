// 메모리 : 9620KB
// 시간 : 148ms

let fs = require('fs');
let input = fs.readFileSync('input.txt').toString();

/*
    1. for문으로 input만큼 순회하며
        1-1. 만약 한자리일 경우
            count += 1
        1-2. 두자리일 경우
            count += 1
        1-3. 세자리일 경우
            char = String[i]
            diff = Number(input[0])-Number(input[1]);
            만약 diff랑 char[1]-char[2]가 같다면
                count += 1;
*/


// 1. for문으로 input만큼 순회하며
let count = 0;
let diff = 0;
let Char = "";

for (let i = 1; i <= Number(input); i++){
    // 1-1. 만약 한자리일 경우 && 1-2. 두자리일 경우
    if (String(i).length === 1 || String(i).length === 2){
        count += 1;
        // console.log(count);
    }
    // 1-3. 세자리일 경우
    else if (String(i).length === 3){
        Char = String(i);
        // console.log(Char);
        diff = Number(Char[0]) - Number(Char[1]);
        // console.log(i, Char[0], Char[1], diff);


        // 만약 diff랑 char[1]-char[2]가 같다면
        if (diff === (Number(Char[1]) - Number(Char[2]))){
            // console.log(i, diff, Char[1], Char[2])
            count += 1;

        }
    }
}

console.log(count);