function solution(a, b) {
    const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let sum = b;
    
    // 전 달까지만 더해야하므로 a-1까지 반복하며 더한다.
    for(let i = 0; i < a-1; i++){
        sum += month[i];
    }
    
    // 1월1일이 금요일이므로 b가 1일때 인덱스는 0이 되어야 한다.
    // sum에서 1을 뺀 다음 7로 나눈 나머지 인덱스로 배열을 조회한다.
    return day[(sum - 1) % 7];
}