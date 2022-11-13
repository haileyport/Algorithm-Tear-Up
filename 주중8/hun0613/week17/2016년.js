// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.07ms, 33.5MB)
// 테스트 12 〉	통과 (0.06ms, 33.5MB)
// 테스트 13 〉	통과 (0.05ms, 33.5MB)
// 테스트 14 〉	통과 (0.04ms, 33.5MB)

// 4점


function solution(a, b) {
    
    // 윤년 : 2월은 29일 까지
    
    let date = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    let monthTodate = 0;
    
    for (let i = 1; i < a; i++){
        let currentMonth = i;
        
        if (i > 7){
            currentMonth += 1;
        }
        
        if (currentMonth === 2){
            monthTodate += 29;  
        }else if (currentMonth % 2 === 0){
            monthTodate += 30;
        }else {
            monthTodate += 31;
        }
    }
    
    let resToNum = (monthTodate + b - 1) % 7;
    
    
    return date[resToNum]
}