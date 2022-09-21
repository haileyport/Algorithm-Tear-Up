function solution(a, b) {
    // a와 b가 같은 경우는 둘 중 아무 수나 리턴
    if(a === b) return a;
    
    // a와 b가 같지 않다면 a와 b 사이에 속한 모든 정수의 합 리턴
    let max = a > b ? a * (a+1) / 2 : b * (b+1) / 2; 
    let min = a > b ? b * (b-1) / 2 : a * (a-1) / 2;
    
    return max - min;
}