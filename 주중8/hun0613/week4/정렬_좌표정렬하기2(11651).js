let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

/*
    check.1 : y좌표가 증가하는 순 -> x좌표가 증가하는 순서로 정렬

    1. for문으로 i는 1부터 input[0]까지 순회하면서,
        1-1. for문으로 j는 1부터 input[0] - i 까지 순회하면서,
            1-1-1. 만약, input[j][2] < input[j+1][2] 라면
                1-1-1-1. swap = input[j+1]
                1-1-1-2. input[j+1] = input[j]
                1-1-1-3. input[j] = swap

            1-1-2. 만약, input[j][2] === input[j+1][2]
                1-1-2-1. 먄약, input[j][0] > input[j+1][0]
                    1-1-2-1-1. swap = input[j+1]
                    1-1-2-1-2. input[j+1] = input[j]
                    1-1-2-1-3. input[j] = swap
*/

for (let i = 1; i <= parseInt(input[0]); i++){
    for (let j = 1; j <= parseInt(input[0]) - i; j++){
        // console.log('1.' + input[j][2], input[j+1][2])
        let cordinate = input[j].split(' ');
        let nextCordinate = input[j+1].split(' ');

        if (parseInt(cordinate[1]) > parseInt(nextCordinate[1])){
            // console.log('1.' + input[j][2], input[j+1][2])
            let swap = input[j + 1];
            input[j + 1] = input[j];
            input[j] = swap;
        }else if(parseInt(cordinate[1]) === parseInt(nextCordinate[1])){
            // console.log('2.' + input[j][2], input[j+1][2])

            if (parseInt(cordinate[0]) > parseInt(nextCordinate[0])){
                let swap = input[j + 1];
                input[j + 1] = input[j];
                input[j] = swap;
            }
        }
    }
}


input.slice(1).forEach((el) => {
    console.log(el);
})

// console.log(input)


// 퀵 정렬 사용
