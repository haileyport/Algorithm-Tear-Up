/*
걸린시간
40분 100/100

정확성 테스트
테스트 1 〉	통과 (0.17ms, 33.5MB)
테스트 2 〉	통과 (0.16ms, 32MB)
테스트 3 〉	통과 (0.18ms, 33.5MB)
테스트 4 〉	통과 (0.17ms, 33.5MB)
테스트 5 〉	통과 (0.17ms, 33.5MB)
테스트 6 〉	통과 (0.16ms, 33.5MB)
테스트 7 〉	통과 (0.19ms, 33.2MB)
테스트 8 〉	통과 (0.17ms, 33.4MB)
테스트 9 〉	통과 (0.17ms, 33.5MB)
테스트 10 〉	통과 (0.17ms, 32MB)
테스트 11 〉	통과 (0.20ms, 33.6MB)
테스트 12 〉	통과 (0.18ms, 33.5MB)
테스트 13 〉	통과 (0.16ms, 33.5MB)
테스트 14 〉	통과 (0.17ms, 32MB)
테스트 15 〉	통과 (0.19ms, 32.1MB)
테스트 16 〉	통과 (0.21ms, 33.5MB)
테스트 17 〉	통과 (0.17ms, 33.5MB)
테스트 18 〉	통과 (0.18ms, 32MB)
테스트 19 〉	통과 (0.24ms, 32MB)
테스트 20 〉	통과 (0.19ms, 33.5MB)
테스트 21 〉	통과 (0.28ms, 33.5MB)
테스트 22 〉	통과 (0.21ms, 33.5MB)
테스트 23 〉	통과 (0.24ms, 33.5MB)
테스트 24 〉	통과 (0.20ms, 32.1MB)
테스트 25 〉	통과 (0.19ms, 33.5MB)
테스트 26 〉	통과 (0.17ms, 32MB)
테스트 27 〉	통과 (0.23ms, 33.6MB)
테스트 28 〉	통과 (0.16ms, 33.6MB)
테스트 29 〉	통과 (0.17ms, 33.5MB)
테스트 30 〉	통과 (0.27ms, 33.5MB)
테스트 31 〉	통과 (0.16ms, 33.5MB)
테스트 32 〉	통과 (0.17ms, 33.5MB)
*/


function solution(dartResult) { // dartResult = 1S2D*3T
    let answer = [];
    // 점수값, 보너스값을 따로 분리
    let scores = dartResult.match(/[0-9]+/g); // [ '1', '2', '3' ] 
    let effects = dartResult.split(/[0-9]+/g).slice(1); // [ 'S', 'D*', 'T' ]

    for (let i = 0; i < 3; i++) {
        let score = Number(scores[i]);
        let effect = effects[i];
        for (let j = 0; j < effect.length; j++) {
            if (effect[j] === 'D') score = Math.pow(score, 2);
            if (effect[j] === 'T') score = Math.pow(score, 3);
            if (effect[j] === '*') {
                score *= 2;
                if (answer[i - 1]) answer[i - 1] *= 2; // 바로 전에 얻은 점수가 있으면 그 점수도 2배
            }   
            if (effect[j] === '#') score *= -1;
        }
        answer.push(score);
        /*
        console.log(answer)
        
        [ 1 ]
        [ 2, 8 ]
        [ 2, 8, 27 ]
        */
    }

    let total = answer.reduce((prev, curr) => prev + curr);
    return total;
}