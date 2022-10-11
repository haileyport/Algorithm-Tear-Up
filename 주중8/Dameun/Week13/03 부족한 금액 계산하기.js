function solution(price, money, count) {
    let totalPrice = Array.from({length : count } , (v,i) => price*(i+1));
    totalPrice = totalPrice.reduce((a,b) => a+b,0)
    if(money >= totalPrice){
        return 0;
    }else{
        return totalPrice-money;
    }
}

//6점
//20분내
// 테스트 1 〉	통과 (0.10ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.4MB)
// 테스트 7 〉	통과 (0.09ms, 33.4MB)
// 테스트 8 〉	통과 (0.08ms, 33.4MB)
// 테스트 9 〉	통과 (0.09ms, 33.4MB)
// 테스트 10 〉	통과 (0.08ms, 33.4MB)
// 테스트 11 〉	통과 (0.12ms, 33.4MB)
// 테스트 12 〉	통과 (0.18ms, 33.5MB)
// 테스트 13 〉	통과 (0.25ms, 33.4MB)
// 테스트 14 〉	통과 (0.18ms, 33.4MB)
// 테스트 15 〉	통과 (0.18ms, 33.4MB)
// 테스트 16 〉	통과 (0.15ms, 33.4MB)
// 테스트 17 〉	통과 (0.16ms, 33.5MB)
// 테스트 18 〉	통과 (0.50ms, 33.4MB)
// 테스트 19 〉	통과 (0.35ms, 33.5MB)
// 테스트 20 〉	통과 (0.34ms, 33.4MB)
// 테스트 21 〉	통과 (0.30ms, 33.4MB)
// 테스트 22 〉	통과 (0.30ms, 33.4MB)
// 테스트 23 〉	통과 (0.17ms, 33.4MB)