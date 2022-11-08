function solution(n)
{
    var answer = 0;
    
    if( n < 10 ) return n

    answer = String(n).split('').reduce((acc, cur) => Number(acc) + Number(cur))

    return answer;
}