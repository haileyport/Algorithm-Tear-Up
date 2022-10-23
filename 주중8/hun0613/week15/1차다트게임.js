// 테스트 1 〉	통과 (0.13ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.5MB)
// 테스트 3 〉	통과 (0.09ms, 33.3MB)
// 테스트 4 〉	통과 (0.13ms, 33.3MB)
// 테스트 5 〉	통과 (0.10ms, 33.3MB)
// 테스트 6 〉	통과 (0.09ms, 33.5MB)
// 테스트 7 〉	통과 (0.10ms, 33.4MB)
// 테스트 8 〉	통과 (0.12ms, 33.5MB)
// 테스트 9 〉	통과 (0.11ms, 33.4MB)
// 테스트 10 〉	통과 (0.09ms, 33.4MB)
// 테스트 11 〉	통과 (0.09ms, 33.3MB)
// 테스트 12 〉	통과 (0.10ms, 33.5MB)
// 테스트 13 〉	통과 (0.09ms, 33.3MB)
// 테스트 14 〉	통과 (0.09ms, 33.4MB)
// 테스트 15 〉	통과 (0.09ms, 33.4MB)
// 테스트 16 〉	통과 (0.10ms, 33.4MB)
// 테스트 17 〉	통과 (0.16ms, 33.4MB)
// 테스트 18 〉	통과 (0.10ms, 33.4MB)
// 테스트 19 〉	통과 (0.10ms, 33.5MB)
// 테스트 20 〉	통과 (0.10ms, 33.4MB)
// 테스트 21 〉	통과 (0.09ms, 33.4MB)
// 테스트 22 〉	통과 (0.09ms, 33.4MB)
// 테스트 23 〉	통과 (0.09ms, 33.5MB)
// 테스트 24 〉	통과 (0.10ms, 33.4MB)
// 테스트 25 〉	통과 (0.09ms, 33.5MB)
// 테스트 26 〉	통과 (0.12ms, 33.4MB)
// 테스트 27 〉	통과 (0.09ms, 33.5MB)
// 테스트 28 〉	통과 (0.09ms, 33.4MB)
// 테스트 29 〉	통과 (0.15ms, 33.4MB)
// 테스트 30 〉	통과 (0.09ms, 33.3MB)
// 테스트 31 〉	통과 (0.10ms, 33.4MB)
// 테스트 32 〉	통과 (0.09ms, 33.4MB)


function solution(dartResult) {
    // 총 3번의 기회
    // 점수는 0~10점
    
    // 보너스
    // S = n^1
    // D = n^2
    // T = n^3
    
    // 옵션
    // * -> 해당점수와 바로 전에 얻은 점수를 각각 2배로 (처음에 *이 나오면 처음 점수만 2배) / (중첩가능)
    // # -> 해당점수 마이너스 (*와 중첩시 -2배)
    
    // [점수 보너스 옵션] 순
    
    let bonus = ['S','D','T'];
    let option = ['*','#'];
    let score = [];
    let point = 0;
    
    for (let i = 0; i < dartResult.length; i++){
        if (dartResult[i] === '1' && dartResult[i+1] === '0'){
            point = 10;
        }else if (Number(dartResult[i])){
            point = Number(dartResult[i]);
        }else if (dartResult[i] === '0'){
            point = dartResult[i-1] === '1' ? point : 0;
        }
        
        
        if (bonus.includes(dartResult[i])){
            score.push(Math.pow(point, bonus.indexOf(dartResult[i]) + 1));
        }
        
        if (dartResult[i] === '*'){
            score[score.length - 1] *= 2;
            score[score.length - 2] *= 2;
        }else if (dartResult[i] === '#'){
            score[score.length - 1] *= -1;
        }
        
    }
    
    
    return score.reduce((a,b) => a + b);
    // return score;
    
    
}