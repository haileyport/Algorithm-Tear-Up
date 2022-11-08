function solution(n)
{
// n의 자릿수의 합 -> n을 split으로 조각내기
// 조각낸 n을 다시 숫자로 바꿔서 더한 후 리턴
    let char = String(n).split("")
    let sum = 0
    for(let i = 0; i < char.length; i++) {
        sum += parseInt(char[i])
    }
    return sum
}