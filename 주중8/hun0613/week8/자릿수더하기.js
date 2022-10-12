function solution(n)
{
    var answer = 0;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    // console.log('Hello Javascript')

    data = n.toString().split('').map(el => Number(el));
    answer = data.reduce((a, b) => a + b);
    
    return answer;
}