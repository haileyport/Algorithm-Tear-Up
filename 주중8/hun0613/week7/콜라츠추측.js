// 풀이시간 : 32분 18초
// 점수 : 6점 😎



function solution(num, count = 1) {
    // num이 1이 될때까지
    // 짝수라면 2로 나누고 -> 홀수라면 3을 곱하고 1을 더하고 -> 재귀...?    

    if(num === 1){
        return 0;
    }

    let res = num % 2 ? num * 3 + 1 : num / 2;
    
    
    if (res === 1){
        return count;
    }
    
    if (count === 500){
        return -1;
    }
    
    return solution(res, count+1);
      
}