// 프로그래머스 핸드폰 번호 가리기
// 난이도 :  level 1
// 풀이시간 :  20분
// 메모리 :	  KB      
// 시간 :   ms      

/*
문제
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
phone_number는 길이 4 이상, 20이하인 문자열입니다.
입출력 예
phone_number	return
"01033334444"	"*******4444"
"027778888"	"*****8888"
*/

/*
1. slice로 마지막 4개 직전까지만 잘라서 그 길이만큼 *을 star를 선언하여 담아준다
2. 뒤의 네개숫자는 num을 선언해서 담아준다
3. star와num을 더해서 return 
*/

function solution(phone_number) {
    let firstNum = phone_number.slice(0, phone_number.length - 4)
    let secondNum = phone_number.slice(phone_number.length - 4, phone_number.length + 1)
    let star = "*".repeat(firstNum.length)
    return star + secondNum;
}

/*
테스트 1 〉	통과 (0.04ms, 30.1MB)
테스트 2 〉	통과 (0.09ms, 30MB)
테스트 3 〉	통과 (0.04ms, 30.1MB)
테스트 4 〉	통과 (0.04ms, 30.1MB)
테스트 5 〉	통과 (0.04ms, 29.9MB)
테스트 6 〉	통과 (0.04ms, 30MB)
테스트 7 〉	통과 (0.05ms, 29.8MB)
테스트 8 〉	통과 (0.04ms, 30MB)
테스트 9 〉	통과 (0.05ms, 29.9MB)
테스트 10 〉	통과 (0.05ms, 29.8MB)
테스트 11 〉	통과 (0.06ms, 29.9MB)
테스트 12 〉	통과 (0.04ms, 29.9MB)
테스트 13 〉	통과 (0.04ms, 30MB)
*/