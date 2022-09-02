function solution(s) {
    let minArr = [];
    
    // 문자열을 1부터 문자열 길이까지 나누기 위해 반복
    for(let number = 1; number <= s.length; number++){
        let sub = [];
            
        // substring으로 i부터 단위까지 나누고 배열에 넣는다.
        for(let i = 0; i < s.length; i += number){
            sub.push(s.substring(i, i+number))
        }
        
        let count = 1;
        let result = "";
        
        // 배열의 각 요소가 다음 요소와 같은지 확인한다.
        for(let n = 0; n < sub.length; n++){
            if(sub[n] === sub[n+1]){
                // 현재 요소와 다음 요소가 같다면 count에 1을 더한다.
                count++
            }else if(count === 1){
                // count가 1이라면 현재 요소와 다음 요소가 같지않고
                // 지금까지 연속된 문자열도 없다는 말이므로 result에 요소를 더한다.
                result += sub[n]
            }else if(sub[n] !== sub[n+1]){
                // 현재까지 연속된 문자열이 있으나 다음 요소는 연속되지 않는다는 것이므로
                // result에 연속된 개수와 연속되고 있는 문자열을 넣고 count에 1을 넣는다.
                result += count + sub[n]
                count = 1;
            }
        }
        
        // 압축한 문자열의 길이를 넣는다.
        minArr.push(result.length);
    }
    
    // 압축한 문자열들 중에서 제일 길이가 짧은 것을 리턴한다.
    return Math.min(...minArr);
}