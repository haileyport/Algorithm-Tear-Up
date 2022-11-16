function solution(x) {
    //자릿수의 합 num
    const num = String(x).split('').map(Number).reduce((acc, cur) => acc + cur);
    
    if(x%num === 0) return true;
    
    return false;
    
}