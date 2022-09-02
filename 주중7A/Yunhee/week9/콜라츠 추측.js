let count = 0;

function solution(num) {
    if(num === 1) return count;  // num이 1이 된 경우
    if(count === 500) return -1; // 작업을 500이상 반복한 경우
    
    // 주어진 수를 2로 나눴을 때 나누어 떨어지면 짝수, 아니면 홀수
    num = num % 2 === 0 ? num /= 2 : (num * 3) + 1;
    
    // 몇번 반복했는지 확인하기 위해 1을 더함
    count++;
    
    return solution(num);
}