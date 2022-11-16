//3글자 이상 15자 이하
//소문자, 숫자, - , _ , . 사용
// . 는 처음과 끝, 연속으로 사용 x

//모두 대문자 > 소문자
//못 들어가는 문자 빼! 
//연속되는 마침표 하나로 바꾸기
//처음이나 끝에 마침표 있으면 빼기
//빈 문자열이면 a 넣기
//16자 이상이면 15개까지만 짜르기
//짤랐는데 마침표가 끝이면 마침표 빼기
//길이가 2글자 이하면 마지막 문자 반복 

function solution(new_id) {

    let result = new_id.toLowerCase().match(/[a-z0-9._-]/g)
    let resultTwo = '';
    for(let n of result){
        if(resultTwo[resultTwo.length-1] === '.' && n === '.'){
        }else{
            resultTwo += n
        }
    }
    if(resultTwo[0] === '.'){
        resultTwo = resultTwo.slice(1)
    }
    if(resultTwo[resultTwo.length-1] === '.'){
        resultTwo = resultTwo.slice(0,resultTwo.length-1)
    }
    if(resultTwo === ''){
        resultTwo = 'a'
    }
    resultTwo = resultTwo.slice(0,15)

    if(resultTwo[resultTwo.length-1] === '.'){
        resultTwo = resultTwo.slice(0,resultTwo.length-1)
    }
    while(resultTwo.length < 3){
        resultTwo += resultTwo[resultTwo.length-1]
    }
    return resultTwo

}

//30분
//4점

// 테스트 1 〉	통과 (0.14ms, 33.4MB)
// 테스트 2 〉	통과 (0.31ms, 33.5MB)
// 테스트 3 〉	통과 (0.23ms, 33.4MB)
// 테스트 4 〉	통과 (0.21ms, 33.4MB)
// 테스트 5 〉	통과 (0.18ms, 33.4MB)
// 테스트 6 〉	통과 (0.20ms, 33.4MB)
// 테스트 7 〉	통과 (0.17ms, 33.4MB)
// 테스트 8 〉	통과 (0.18ms, 33.4MB)
// 테스트 9 〉	통과 (0.20ms, 33.5MB)
// 테스트 10 〉	통과 (0.20ms, 33.5MB)
// 테스트 11 〉	통과 (0.18ms, 33.4MB)
// 테스트 12 〉	통과 (0.17ms, 33.1MB)
// 테스트 13 〉	통과 (0.17ms, 33.5MB)
// 테스트 14 〉	통과 (0.15ms, 33.5MB)
// 테스트 15 〉	통과 (0.21ms, 33.4MB)
// 테스트 16 〉	통과 (0.28ms, 33.4MB)
// 테스트 17 〉	통과 (0.48ms, 33.5MB)
// 테스트 18 〉	통과 (0.45ms, 33.8MB)
// 테스트 19 〉	통과 (0.73ms, 33.8MB)
// 테스트 20 〉	통과 (0.40ms, 33.5MB)
// 테스트 21 〉	통과 (0.30ms, 33.5MB)
// 테스트 22 〉	통과 (0.22ms, 33.4MB)
// 테스트 23 〉	통과 (0.53ms, 33.6MB)
// 테스트 24 〉	통과 (1.19ms, 34.1MB)
// 테스트 25 〉	통과 (0.38ms, 33.6MB)
// 테스트 26 〉	통과 (0.42ms, 33.5MB)