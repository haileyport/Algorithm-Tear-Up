function solution(participant, completion) {
    let a = participant.sort();
    let b = completion.sort();
    let n = 0;
    while(n < a.length){
        if(a[n] !== b[n]){
            return a[n];
        }else{
            n++
        }
    }
}

//5점
//20분
//shift는 시간을 좀 더 잡아먹는다~ 

// 정확성  테스트
// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.30ms, 33.5MB)
// 테스트 4 〉	통과 (0.60ms, 33.7MB)
// 테스트 5 〉	통과 (0.60ms, 33.7MB)
// 효율성  테스트
// 테스트 1 〉	통과 (43.37ms, 47.3MB)
// 테스트 2 〉	통과 (68.21ms, 52.7MB)
// 테스트 3 〉	통과 (92.23ms, 58.4MB)
// 테스트 4 〉	통과 (133.28ms, 59MB)
// 테스트 5 〉	통과 (92.62ms, 57MB)