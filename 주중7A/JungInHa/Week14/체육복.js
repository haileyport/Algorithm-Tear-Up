function solution(n, lost, reserve) { 
    let answer = n - lost.length;
    
    lost = lost.filter(student => {
        let reserveIdx = reserve.indexOf(student); 
        if (reserveIdx === -1) return true; 
        reserve.splice(reserveIdx, 1);
        answer++; 
        return false; 
    })
    
    lost.sort((a, b) => a - b); 
    
    lost.forEach(student => {
        let frontReserve = reserve.indexOf(student - 1);
        if (frontReserve !== -1) {
            reserve.splice(frontReserve, 1);
            answer++;
            return;
        } 
        let backReserve = reserve.indexOf(student + 1);
        if (backReserve !== -1) {
            reserve.splice(backReserve, 1);
            answer++;
            return;
        } 
    })
  
    return answer;
}
