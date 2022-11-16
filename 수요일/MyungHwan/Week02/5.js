function solution(n) {
    return Number(n.toString().split('').sort((a,b) => b - a).join(''))
}


//! 문자열을 *해주면 숫자로 바뀜
// function solution(n) {
//     //숫자가 분명히 더 빠름
//     var nums =[];
//     do{
//         nums.push(n%10);
//         n=Math.floor(n/10);
//     } while(n>0)

//     return nums.sort((a,b)=>b-a).join('')*1;
//     //문자는 느림
//     return (n+"").split('').sort((a,b)=>b-a).join('')*1;
// }