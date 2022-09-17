// 풀이시간 : 9분 17초


function solution(x) {
    var answer = true;
    
    // 각 자리수를 더한 값으로 나누어 떨어지면 하샤드 수
    
    // x를 문자열로 toString()으로 문자열로 바꾼후
    let StringX = x.toString();
    let sum = 0;
    
    for (let i = 0; i < StringX.length; i++){
        // sum에 각 자릿수의 합을 할당  
        sum += Number(StringX[i]);
    }
    
    // x에 sum을 나눠서 나머지가 0이 아니면(true)면 answer은 false
    x % sum ? answer = false : answer = true;
    
    return answer;
}