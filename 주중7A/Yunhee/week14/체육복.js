function solution(n, lost, reserve) {
    // 체육수업을 들을 수 있는 학생의 최댓값을 return 
    let count = 0;
    
    // 여벌 옷을 가져왔지만 도난당한 경우 제외
    const removeArr = [];
    
    for(let i = 0; i < lost.length; i++){
        if(reserve.includes(lost[i])){
            removeArr.push(lost[i]);
        }
    }
    
    lost = lost.sort((a,b) => a - b).filter(e => !removeArr.includes(e));
    reserve = reserve.sort((a,b) => a - b).filter(e => !removeArr.includes(e));
    
    // 여벌 옷이 있는 사람이 앞이나 뒷번호라면 count++
    for(let i = 0; i < lost.length; i++){
        let prev = reserve.indexOf(lost[i] - 1);
        let next = reserve.indexOf(lost[i] + 1);
        
        if(prev > -1) {
            reserve.splice(prev, 1);
            count++;
        }else if(next > -1) {
            reserve.splice(next, 1);
            count++;
        }
    }
    
    return n - (lost.length - count);
}