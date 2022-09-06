function solution(n)
{
    if(String(n).length === 1) return n
    let answer = String(n).split('').reduce((prev,cur)=> Number(prev) + Number(cur))
    return answer;
}
