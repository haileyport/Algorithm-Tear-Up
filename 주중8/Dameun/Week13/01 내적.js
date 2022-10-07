function solution(a, b) {
    let newArr = [];
    while(a.length > 0){
        newArr.push(a[0]*b[0]);
        a.shift();
        b.shift();
    }
    return newArr.reduce((a,b) => a + b)
}

//1점
// 테스트 1 〉	통과 (0.80ms, 33.5MB)
// 테스트 2 〉	통과 (0.25ms, 33.6MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.15ms, 33.5MB)
// 테스트 5 〉	통과 (0.14ms, 33.5MB)
// 테스트 6 〉	통과 (0.44ms, 33.5MB)
// 테스트 7 〉	통과 (0.56ms, 33.6MB)
// 테스트 8 〉	통과 (0.68ms, 33.7MB)
// 테스트 9 〉	통과 (0.37ms, 33.7MB)
