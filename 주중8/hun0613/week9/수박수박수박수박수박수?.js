function solution(n) {
    var answer = '';
    
    // 1번째방법 (2번째보다 빠름)
    
    // 0포함 짝수 인덱스에는 '수'
    // 홀수 인덱스에는 '박'
    
    // input은 n

    // n만큼 반복되는데 인덱스가 짝이면 '수' 홀이면 '박'

    for (let i = 0; i < n; i++){
        answer = i % 2 ? answer + '박' : answer + "수";
    }
    
    return answer;
    
    
    // 2번째 방법
    
    // 토글 방식
    // toggle의 시작값은 true -> '수'부터 시작한다.
    // true면 '수' 아니면 '박'
    
    // let toggle = true;
    
    // for (let i = 0; i < n; i++){
    //     answer = toggle ? answer + '수' : answer + '박';
        
    //     toggle = !toggle;
    // }
    
    // return answer;
}