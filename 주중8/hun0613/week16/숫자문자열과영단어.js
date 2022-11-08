// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.15ms, 33.3MB)
// 테스트 7 〉	통과 (0.15ms, 33.3MB)
// 테스트 8 〉	통과 (0.15ms, 33.4MB)
// 테스트 9 〉	통과 (0.16ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)


function solution(s) {

    // zero 부터 nine 까지 포함된 vocab 배열 선언
    
    // s를 앞에서부터 한글자 씩 보면서 
        // s의 글자가 숫자라면 바로 answer에 더하기
        // 숫자가 아니라면 temp라는 빈 문자열에 더하기
    // 더해질 때마다 temp가 vacab의 원소에 있는지 includes로 판별
        // 없다면 계속 더하기
        // 있다면 temp에 해당하는 vacab의 원소 인덱스의 값을 answer라는 빈 문자열에 더하기
        // 그리고 temp는 다시 빈문자열로 초기화
    
    
    const vocab = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let answer = '';
    let temp = '';
    
    for (let i of s){
        if (Number(i) || i === '0'){
            answer += i;
        }else{
            temp += i;
            
            if (vocab.includes(temp)){
                answer += vocab.indexOf(temp);
                temp = '';
            }
        }
    }
    
    
    return +answer;
}