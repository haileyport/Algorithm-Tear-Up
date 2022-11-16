/*
통과 여부 : 통과
점수 : +9
시간 : 20분


아이디어
    - 재귀를 써볼까?
        - 2로 나누고
        - 3으로 나누고
*/

// 아 전체의 최소 공배수
// 최소 공배수와 또 최소 공배수를 구하기
function solution(arr) {
    function gcd(a, b) { 
        return b ? gcd(b, a%b): a;
      }
    
    function LCM(a, b) {
        return a*b / gcd(a,b);
    }
    
    let lcm = 0;
    for (let i=0; i<arr.length; i++){
       if(i === 0){
        lcm = LCM(arr[0], arr[1]);
        continue;
       }
        lcm = LCM(lcm, arr[i])
    }
    return lcm;
}


