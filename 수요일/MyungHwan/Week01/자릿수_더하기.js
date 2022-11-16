function solution(n)
{
    let answer = `${n}`;
    let sum = 0;
    for(let i = 0; i < answer.length; i++){
        sum = sum + Number(answer[i]);
    }
    return sum;
}