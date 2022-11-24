function solution(dartResult) {
    // 다트 3번 : 0~10점
    // S D T 영역 > 각각 1 2 3제곱, 점수마다 1개씩 존재
    // * 스타상: 현재 점수와 직전 점수를 2배
    // 첫 번째로 나올 수도 있으나 스타상의 점수만 2배
    // # 아차상: 현재 점수를 +가 아니라 -
    // *와 * 중첩 가능 > 4배
    // * # 중첩 시 # 점수가 2배로 마이너스
    // *과 #는 점수마다 하나만 존재, 존재하지 않을 수도.
    
    let current;
    let history = [];
    let answer = 0;
    for(i=0; i<dartResult.length; i++) {
        
        if(isNaN(dartResult[i])){
            // 제곱 다트판부터 해결
            if(dartResult[i] === 'S') {
                history.push(current);
                current = current;
            } else if(dartResult[i] === 'D') {
                history.push(current ** 2);
                current = current ** 2;
            } else if(dartResult[i] === 'T') {
                history.push(current ** 3);
                current = current ** 3;
            }
            // 스타상
            if(dartResult[i] === '*') {
                if(history.length > 1) {
                    const last = history.pop();
                    const before = history.pop();
                    history.push(before*2);
                    history.push(last*2);
                    current = last*2;
                } else {
                    const before = history.pop();
                    history.push(before*2);
                    current = before*2;
                }
            }
            // 아차상
            if (dartResult[i] === '#') {
                const last = history.pop();
                history.push(-(last));
                current = -last;
                
            }
            
        } else { // 숫자인 경우
            if(dartResult[i] === '0'){
                current === '1' ? current = 10 : current = 0;
            } else {
                current = dartResult[i];
            }
        }
    }
    history.forEach(el => {
        answer += +el
    })
    return answer;
}