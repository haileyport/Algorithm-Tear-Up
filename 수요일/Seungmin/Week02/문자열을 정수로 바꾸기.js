function solution(s) {
    
    if(Number(s) !== NaN) return Number(s);
    
    const arr = s.split('-');

    // 부호가 마이너스이면 곱하기 -1
    return Number(arr[1]) * -1
}