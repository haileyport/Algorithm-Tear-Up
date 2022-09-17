// 프로그래머스 이상한 문자 만들기
// 난이도 :  level 1
// 풀이시간 : 1시간
// [PGS] 이상한 문자 만들기 / leve1

/*
문제
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 사항
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
입출력 예
s	return
"try hello world"	"TrY HeLlO WoRlD"
입출력 예 설명
"try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다. 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 "TrY", "HeLlO", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD" 를 리턴합니다.
*/

/*
- 문장을 스페이스바 기준으로 나누기 위해 str을 선언하여 split 해 주어 str에 담아주었다.
- 이중 for문 안에 if를 사용하여 각 단어 안의 0번째와 짝수 번째 index에는 toUpperCase를 적용하고 홀수번째 index에는 toLowerCase를 적용했다.
- 스페이스바를 추가하기 위해 첫 번째 for문 안에서 if문을 사용하여 넣어 주었다.
*/


function solution(s) {
    var answer = '';
    let str = s.split(" ");
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str[i].length; j++) {
            if(j % 2 == 0) {
               answer += str[i][j].toUpperCase();
            } else {
                answer += str[i][j].toLowerCase();
            }
        }
        if(i < str.length - 1) {
            answer += " "
        }
    }
    return answer;
}

/*
테스트 1 〉	통과 (0.15ms, 29.8MB)
테스트 2 〉	통과 (0.07ms, 30.1MB)
테스트 3 〉	통과 (0.15ms, 30.1MB)
테스트 4 〉	통과 (0.12ms, 30MB)
테스트 5 〉	통과 (0.09ms, 30MB)
테스트 6 〉	통과 (0.08ms, 29.9MB)
테스트 7 〉	통과 (0.10ms, 30.1MB)
테스트 8 〉	통과 (0.10ms, 30.1MB)
테스트 9 〉	통과 (0.08ms, 29.9MB)
테스트 10 〉	통과 (0.11ms, 29.9MB)
테스트 11 〉	통과 (0.10ms, 30MB)
테스트 12 〉	통과 (0.10ms, 29.9MB)
테스트 13 〉	통과 (0.09ms, 29.9MB)
테스트 14 〉	통과 (0.09ms, 30MB)
테스트 15 〉	통과 (0.08ms, 30MB)
테스트 16 〉	통과 (0.09ms, 29.7MB)
*/