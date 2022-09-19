function solution(n) {
    var answer = [];
    
    // data에 n을 문자열로 바꿔서 각 자리를 기준으로 나눈 후, 그것을 숫자로 변환
    let data = n.toString().split('').map(el => Number(el));
    
    // 뒤에서부터 answer에 푸쉬
    for (let i = data.length - 1; i >= 0; i--){
        answer.push(data[i]);
    }
    
    return answer;
}