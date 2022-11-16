/**
 * 통과 여부 : 통과
 * 시간 : 33분
 * 점수 : +4
 * 아이디 : 3~15
 * 소문자, 숫자, -, _, . 사용 가능
 * .은 처음, 끝 안돼고 연속 사용도 x
 * 대문자를 소문자로 toLowerCase
 * 얘네 아니면 다 제거 .. 정규 표현식?
 * . 제거 : 2연속, 처음이나 끝
 * 빈 문자열이면 a 대입
 * 16자 이상이면 첫 15개 빼고 제거
 * 제거했을 때 또 . 있으면 제거
 * 2자 이하면 3 이상될 때까지 계속 붙이기
 * 
 * 테스트 1 〉	통과 (0.17ms, 33.4MB)
테스트 2 〉	통과 (0.23ms, 33.5MB)
테스트 3 〉	통과 (0.20ms, 33.4MB)
테스트 4 〉	통과 (0.29ms, 33.5MB)
테스트 5 〉	통과 (0.21ms, 33.5MB)
테스트 6 〉	통과 (0.12ms, 33.5MB)
테스트 7 〉	통과 (0.18ms, 33.5MB)
테스트 8 〉	통과 (0.28ms, 33.6MB)
테스트 9 〉	통과 (0.12ms, 33.5MB)
테스트 10 〉	통과 (0.12ms, 33.5MB)
테스트 11 〉	통과 (0.19ms, 33.6MB)
테스트 12 〉	통과 (0.32ms, 33.6MB)
테스트 13 〉	통과 (0.24ms, 33.5MB)
테스트 14 〉	통과 (0.31ms, 33.4MB)
테스트 15 〉	통과 (0.29ms, 33.5MB)
테스트 16 〉	통과 (0.34ms, 33.5MB)
테스트 17 〉	통과 (0.34ms, 33.5MB)
테스트 18 〉	통과 (0.37ms, 33.5MB)
테스트 19 〉	통과 (0.27ms, 33.5MB)
테스트 20 〉	통과 (0.26ms, 33.5MB)
테스트 21 〉	통과 (0.26ms, 33.5MB)
테스트 22 〉	통과 (0.28ms, 33.6MB)
테스트 23 〉	통과 (0.27ms, 33.4MB)
테스트 24 〉	통과 (0.19ms, 33.5MB)
테스트 25 〉	통과 (0.24ms, 33.5MB)
테스트 26 〉	통과 (0.18ms, 33.6MB)
 */
function solution(new_id) {
    let stepOne = new_id.toLowerCase();
    
    // 정규표현식 이거 아닌 거 제외
    // 영문자, _, -, 으로 이뤄진 거 아닌 거 모두 찾는다
    // 띄어쓰기하면 적용 안되네.
    let regTwo =  /[^\w\-\.]/g 
    
    let stepTwo = stepOne.replace(regTwo, '');
    
    // 마침표 2번 이상 연속되면 하나의 .로
    // 오오 됐다 \를 써야하네.
    let regThree = /\.+/g
    let stepThree = stepTwo.replace(regThree, '.');
    
    // 마침표가 처음이나 끝이면 제거
    // 처음이 .으로 시작할 때
    // 왜 안 없어져 => ^^ return을 three하고 있었으니까 ^^
    // | 는 또는
    let regFour = /^\.|\.$/gi
    let stepFour = stepThree.replace(regFour, '');
    
    let stepFive = stepFour===''?'a':stepFour;
    
    // 16자 이상이면 15개 제외하고 제거
    let stepSix = stepFive.length >= 16? 
        stepFive.slice(0, 15).replace(/\.$/g, ''): stepFive;
    
    let stepSeven = stepSix.length <= 2? 
        stepSix += stepSix.slice(-1).repeat(3-stepSix.length)
        :stepSix;
    return stepSeven;
}