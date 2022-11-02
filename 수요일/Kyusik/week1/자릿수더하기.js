function solution(n)
{
    let arr = n.toString().split('')
    return arr.reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0)
}