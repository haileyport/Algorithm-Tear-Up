/*
통과 여부 : 통과
시간 : 15분
점수 : +2

문제
    - 하샤드 수 : x / (x의 각 자릿수 합)
    - input : number
    - output : boolean

*/

function solution(x) {
    let origin = x;
    let sum = 0;
    while(x>0){
        sum += x%10
        x = parseInt(x/10);
    }
    
    if(origin % sum === 0){
        return true;
    }
    return false;
}