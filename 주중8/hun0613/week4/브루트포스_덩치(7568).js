// memory : 9544KB
// time : 132ms


let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

/*
    check.1 : A(x, y), B(p, q) 일 때, x > p && y > q 라면 A가 B보다 덩치가 크다
    check.2 : 만약, x > p 인데 q > y 라면 비교할 수 없다.
    check.3 : N명의 집단에서 나보다 덩치가 큰 사람의 수 + 1 이 나의 등수이다.
    check.4 : 비교할 수 없는 사람들은 모두 등수가 같다.
    check.5 : 같은 등수를 가진 사람들보다 덩치가 작다면, 그냥 본인보다 큰 덩치의 사람 수 + 1이 본인 등수이다.
    check.6 : 첫번째 줄에는 전체 사람 수

    0. Num = input[0]
    0. res = [];
    1. for문으로 i는 1부터 Num까지 순회하면서,
        1-1. count = 1
        1-2. info = input[i].split(' ')
        1-3. weight = info[0]
        1-4. height = info[1]
        1-5. for문으로 j는 2부터 Num까지 순회하면서,
            1-5-1. DataToCompare = input[j].split(' ')
            1-5-2. Dweight = info[0]
            1-5-3. Dheight = info[1]
            1-5-4. 만약, weight < Dweight && height < Dheight 이면,
                1-5-4-1. count += 1
        1-6. res.push(conut)
    2. console.log(res.join(' '));   
*/

const Num = parseInt(input[0]);
let res = [];

for(let i = 1; i <= Num; i++){
    let count = 1;
    let info = input[i].split(' ');
    let weight = parseInt(info[0]);
    let height = parseInt(info[1]);

    for(let j = 1; j <= Num; j++){
        let DataToCompare = input[j].split(' ');
        let Dweight = parseInt(DataToCompare[0]);
        let Dheight = parseInt(DataToCompare[1]);

        if (weight < Dweight && height < Dheight){
            count += 1;
            // console.log('counted')
        }
    }
    res.push(count);
}

console.log(res.join(' '));
// console.log(res);