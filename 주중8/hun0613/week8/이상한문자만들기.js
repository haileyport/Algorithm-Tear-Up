function solution(s) {

    // 먼저 s를 배열로 만들어주고
    // 0부터 시작하니까 짝수 인덱스는 upperCase, 홀수 인덱스는 lowerCase로 해서 map으로 변환
    // 마지막 join
    let answer = '';
    let arr = s.split(' ');
    
    
    
    arr.forEach(el => {
        answer = answer + ' ' + el.split('').map((alpha, index) => index % 2 ? alpha.toLowerCase() : alpha.toUpperCase()).join('')
    });
    
    
    
    return answer.slice(1);
}