// 두 수의 짝꿍을 구한다 
	// 0-9까지 X와 Y에서 갯수를 세고 더 적은 수가 등장 횟수 
	// 등장 횟수가 0이면 그 숫자는 짝꿍이 아님
	// 0이 아니면 그 수를 등장 횟수 만큼 반복해서 배열에 저장해두기 
// 짝꿍이 없으면 -1을 리턴 
// 짝꿍이 0 뿐이면 '0'을 리턴 -> 짝꿍이 하나고 거기에 '0'이 있으면
// 있으면 짝꿍들로 가장 큰 숫자(큰 수부터 앞자리)를 만들고 문자열로 리턴

function solution(X, Y) { 
    let countNum = [];
    for (let i = 0; i <= 9; i++) {
        let regex = new RegExp(i, 'g');
        let countX = (X.match(regex) || []).length;
        let countY = (Y.match(regex) || []).length;
        let count = Math.min(countX, countY);
        if (count !== 0) countNum.push(`${i}`.repeat(count));
    }
    
    if (countNum.length === 0) return '-1';
    if (countNum.length === 1 && countNum[0][0] === '0') return '0'
    
    return countNum.reverse().join('')
    console.log(countNum)
}
