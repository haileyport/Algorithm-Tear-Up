function solution(progresses, speeds) {
    let answer = [];
    
    // 작업이 모두 끝날 때까지 반복
    while(progresses.length > 0){
        let leng = progresses.length;
        let cnt = 0;
        
        // 한턴이 지날 때마다 각 작업에 개발 속도를 더함
        for(let i = 0; i < leng; i++) progresses[i] += speeds[i];  
    
        for(let i = 0; i < leng; i++){
            let pro = progresses.shift();
            
            // 작업 진도가 100%를 넘은게 있는지 확인하고 넘었다면 그대로 제거
            if(pro >= 100) {
                speeds.shift();
                cnt++;
            }else {
                // 현재 작업 진도가 100%이하라면 나머지도 나갈 수 없음
                progresses.unshift(pro);
                break;
            }
        }
        
        if(cnt > 0) answer.push(cnt);
    }
    
    return answer;
}