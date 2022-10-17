function solution(n, words) {
    let count = 1;
    let number = 0;
    
    for(let i = 1; i < words.length; i++){
        // 차례가 한번씩 돌 때마다 값 증가
        if(i % n === 0) count++;
        
        const temp = words.slice(0, i); 
        
        if(words[i].length === 1 // 단어가 한 글자이거나
           || temp.includes(words[i]) // 이전에 말한 단어를 또 언급했거나
           || words[i][0] !== words[i-1][words[i-1].length-1]){ // 앞사람이 말한 단어의 마지막 문자로 시작하지 않는 경우
            number = (i % n) + 1;
            break;
        }
    }
    
    return [number, number === 0 ? 0 : count];
}