function solution(n, info) {
    let answer = [];
    
    for(let i = 0; i < info.length; i++){
        if(n === 0){
            answer.push(0); // 화살을 모두 소진한 경우
        }else{  
            if(i === 0 && info[i] === n){
                return [-1];
            }
            
            if(info[i] > Math.abs(n/3)){
                answer.push(0);
            }else{
                answer.push(info[i] + 1);
                n -= answer[i];
            }
        }
    }
    
    return answer;
}
