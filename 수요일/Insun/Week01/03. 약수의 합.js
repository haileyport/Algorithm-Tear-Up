function solution(n) {
    // n의 약수를 구하는 법: n까지의 반복문을 돌리면서 나머지가 0이면 약수이다.
    let result = 0
    for(let i = 1; i <= n; i++) {
        if(!(n % i)) {
            result+=i
        }
    }
    return result
}