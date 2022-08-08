let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

// 버블정렬
// memory : 10765KB
// time : 360ms
// best case : O(n)
// worst case : O(n^2)

/*
1. for i는 0부터 input의 길이까지
1-1. for j는 0부터 input - i 까지 // 버블소팅이 돋때마다 우측 끝에 가장 큰 수가 자리잡기 때문
    1-1-1. 만약, input[j] > input[j + 1] 이라면,
        1-1-1-1. swap에 input[j + 1] 할당
        1-1-1-2. input[j+1] = input[j]
        1-1-1-3. input[j] = swap

2. for i는 0부터 input 길이까지
2-1. console.log(input[i])

*/

// for (let i = 1; i <= parseInt(input[0]); i++){
//     // console.log(input[i]);
//     for (let j = 1; j <= parseInt(input[0]) - i; j++){
//         // console.log('첫번째: ' + input[j], '두번째: ' + input[j+1])
//        if (parseInt(input[j]) > parseInt(input[j + 1])){
//             let swap = input[j + 1];
//             input[j + 1] = input[j];
//             input[j] = swap;
//             // console.log(count)
//             // console.log('첫번째: ' + input[j], '두번째: ' + input[j+1])
//        } 
//     }   
// }

// input.slice(1).forEach((el)=>{
//     console.log(el);
// })









// 삽입정렬
// memory : 11472KB
// time : 284ms
// best case : O(n)
// worst case : O(n^2)


/*
    1. for문으로 i는 2부터 input[0]까지 순회하면서
        1-1. cur은 input[i]
        1-2. left = i -1
        1-3. left가 0보다 크면서 input[left] > cur 인 동안,
            1-3-1. input[left + 1] = input[left]
            1-3-2. input[left] = cur
            1-3-3. left--
*/

// for(let i = 2; i <= parseInt(input[0]); i++){
//     let cur = parseInt(input[i]);
//     let left = i - 1;

//     while((left > 0) && (parseInt(input[left]) > cur)){
//         input[left + 1] = parseInt(input[left]);
//         input[left] = cur;
//         left--;
//     }
// }

// input.slice(1).forEach((el)=>{
//     console.log(el);
// })




// 선택정렬
// memory : 11484KB
// time : 328ms
// best case : O(n^2)
// worst case : O(n^2)


/*
    1. for문으로 i는 1부터 input[0]까지 순회하면서
        2. for문으로 j는 i + 1부터 input[0]까지 순회하면서
            2-1. minIndex = i
            2-2. 만약, input[i] > input[j]
                2-2-1. minIndex = j
            2-3. 만약, minIndex !== i 이라면,
                2-3-1. swap은 input[minIndex]
                2-3-2. index[minIndex] = index[i]
                2-3-3. index[i] = swap
*/

for(let i = 1; i <= parseInt(input[0]); i++){
    for(let j = i + 1; j <= parseInt(input[0]); j++){
        let minIndex = i;
        if(parseInt(input[i]) > parseInt(input[j])){
            minIndex = j;
        }

        if(minIndex !== i){
            let swap = parseInt(input[minIndex]);
            input[minIndex] = parseInt(input[i]);
            input[i] = swap;
        }
    }
}

input.slice(1).forEach((el)=>{
    console.log(el);
})