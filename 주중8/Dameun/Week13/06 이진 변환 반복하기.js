function solution(s) {
    let count = 0;
    let zeroCount = 0;
    let nonZero ='';
    while(true){
        if(s === '1'){
            return [count,zeroCount];
        }
        nonZero = s.replace(/0/g , '');
        zeroCount += (s.length - nonZero.length);
        count ++;
        s = (nonZero.length).toString(2) + '';
    }
}

//1점 ?
//20분내
//테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (3.57ms, 33.9MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.10ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.94ms, 34.3MB)
// 테스트 10 〉	통과 (6.26ms, 36.1MB)
// 테스트 11 〉	통과 (3.26ms, 34.4MB)