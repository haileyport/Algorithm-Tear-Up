function solution(left, right) {
    //약수의 갯수가 홀수 : 제곱근이 정수다
    let result = 0;
    for(let n = left; n<= right; n++){
        if(Math.sqrt(n)%1 === 0){
            result += n*-1;
        }else{
            result += n;
        }
    }
    return result;
}

// //1점
// 테스트 1 〉	통과 (0.19ms, 33.6MB)
// 테스트 2 〉	통과 (0.13ms, 33.4MB)
// 테스트 3 〉	통과 (0.21ms, 33.5MB)
// 테스트 4 〉	통과 (0.11ms, 33.4MB)
// 테스트 5 〉	통과 (0.17ms, 33.4MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)
// 테스트 7 〉	통과 (0.11ms, 33.5MB)