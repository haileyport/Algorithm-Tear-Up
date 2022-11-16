//나머지가 1이 되는 수 찾기

// function solution(n) {
//     var answer = 0;
//     let num = n - 1

//     const isPrime = (num) => {
//         for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     console.log(isPrime(num))

//     if (isPrime(num)) {
//         return num
//     }

//     if (num === 9) {
//         return 3
//     }

//     if (num % 2 === 1) {
//         return num
//     }

//     while (num / 2 !== 1 && num % 2 === 1) {
//         return num = num / 2
//     }
//     return num;
// }


console.log(solution(50))




function solution(n) {
    let num = n - 1
    if (num % 2 === 0) {
        return 2
    }

    for (let i = 2; i <= (n - 1); i++) {
        if (num % i === 0) {
            return i
        }
    }
}

// 테스트 1 〉	통과 (4.47ms, 36.3MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)
// 테스트 8 〉	통과 (0.03ms, 33.5MB)
// 테스트 9 〉	통과 (0.03ms, 33.4MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.03ms, 33.4MB)