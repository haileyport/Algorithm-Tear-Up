// 테스트 1 〉	통과 (0.24ms, 33.6MB)
// 테스트 2 〉	통과 (32.45ms, 37MB)
// 테스트 3 〉	통과 (0.17ms, 33.5MB)
// 테스트 4 〉	통과 (0.11ms, 33.4MB)
// 테스트 5 〉	통과 (0.16ms, 33.5MB)
// 테스트 6 〉	통과 (0.31ms, 33.5MB)
// 테스트 7 〉	통과 (0.31ms, 33.5MB)
// 테스트 8 〉	통과 (0.26ms, 33.4MB)
// 테스트 9 〉	통과 (9.14ms, 39.6MB)
// 테스트 10 〉	통과 (8.22ms, 39.3MB)
// 테스트 11 〉	통과 (37.19ms, 37.6MB)


// 풀이시간 : 1시간 17분
// 점수 : 1점 (이게...? 개빡...)


function makeBinary(n){
    if (n === 1){
        return [1];
    }
    
    
    let num = Math.floor(n / 2);
    let res = [];
    
    
    if (num === 1){
        return [1, n % 2];
    }
    
    res.unshift(n % 2);
    
    return [...makeBinary(num), ...res]
}


function solution(s) {
    // 1. s에서 0을 모두 제거 (제거한 0의 갯수 리턴)
    // 2. 0이 제거된 s의 길이를 다시 이진법으로 바꾸고
    // 3. 거기서 또 0을 제거 (제거한 0의 갯수 리턴)
    // s가 1이 될때까지
    
    function getCount(n){
        let answer = [];
        let count = 0;
        let newStr = '';
    
        if (n === '1'){
            return [count];
        }
    
    
        for (let i = 0; i < n.length; i++){
            if(n[i] === '0'){
                count++;
            }
            else{
                newStr += n[i];
            }
        }
    
        
        return [count, ...getCount(makeBinary(newStr.length).join(''))];
    }
    
    let countData = getCount(s);
    
    return [countData.length - 1, countData.reduce((a,b) => a + b)]
      

}

