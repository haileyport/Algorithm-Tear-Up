/**
 * 통과 여부 : 통과
 * 시간 : 10분
 * 점수 :+1
 * 뭔가 되게 멍충하게 얼렁뚱땅 풀었음.
 */

/**
 * 
 * @param {*} left 
 * @param {*} right 
 * @returns 
 */
 function solution(left, right) {
    let answer = [];
    let count = 0;
    let result = 0;
    
    for (let i = left; i <= right; i++) {
        count = 0;
        for (let j = 1; j<= i; j++){
            if(i % j === 0){
                count++;
            }
        }
        answer.push(count);
    }

    let totalNumber = Array.from({length: right-left+1}, (v,i) => i+left);
    
    answer.forEach((el, idx) => {
        result += el % 2? -totalNumber[idx]: totalNumber[idx];
    })
    // 아 원래 수를 더하는 거임.
    
    return result;
}

/*
테스트 1 〉	통과 (3.93ms, 36.8MB)
테스트 2 〉	통과 (3.61ms, 36.6MB)
테스트 3 〉	통과 (2.45ms, 36.7MB)
테스트 4 〉	통과 (2.28ms, 36.7MB)
테스트 5 〉	통과 (3.77ms, 36.6MB)
테스트 6 〉	통과 (2.06ms, 36.7MB)
테스트 7 〉	통과 (0.34ms, 33.7MB)
 */