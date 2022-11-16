/**
 * 통과
 * 40분
 * +4
 * 
테스트 1 〉	통과 (0.09ms, 33.5MB)
테스트 2 〉	통과 (0.09ms, 33.5MB)
테스트 3 〉	통과 (0.10ms, 33.6MB)
테스트 4 〉	통과 (0.12ms, 33.5MB)
테스트 5 〉	통과 (0.09ms, 33.5MB)
테스트 6 〉	통과 (0.09ms, 33.5MB)
테스트 7 〉	통과 (0.23ms, 33.5MB)
테스트 8 〉	통과 (0.22ms, 33.7MB)
테스트 9 〉	통과 (0.22ms, 33.5MB)
테스트 10 〉	통과 (0.25ms, 33.5MB)
테스트 11 〉	통과 (0.23ms, 33.6MB)
테스트 12 〉	통과 (0.31ms, 33.7MB)
테스트 13 〉	통과 (0.34ms, 33.6MB)
테스트 14 〉	통과 (0.43ms, 33.6MB)
테스트 15 〉	통과 (0.45ms, 33.7MB)
테스트 16 〉	통과 (0.46ms, 33.6MB)
테스트 17 〉	통과 (0.49ms, 33.6MB)
테스트 18 〉	통과 (0.47ms, 33.7MB)
테스트 19 〉	통과 (0.46ms, 33.6MB)
테스트 20 〉	통과 (0.49ms, 33.6MB)
 */

/**
 * 약간 -> 1
 * 동의 비동의 -> 2
 * 매우 -> 3
 * 
 * survey : 1차원 문자열 배열 => RT, TR, FC, CF ...
 *  "RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"
 * choices : 1차원 선택지 배열 => 1 ~ 7
 * 
 * 모든 질문의 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격

* 유사코드
    - 쪼개서 점수 넣기 
    - 그냥 객체 만들어서 저장할까?
*/


function solution(survey, choices) {
    let test = {R:0, T:0,
               C:0, F:0,
               J:0, M:0,
               A:0, N:0};
    
    for (let i=0; i<survey.length; i++) {
        let [prev, next] = survey[i];
        if(choices[i] < 4) {
            test[prev]+= Math.abs(choices[i]-4);
        }else if(choices[i] > 4) {
            test[next]+= Math.abs(choices[i]-4);
        }
    }
    // return test;
    let answer = "";
    answer += test.T > test.R? "T": "R";
    answer += test.C >= test.F? "C": "F";
    answer += test.J >= test.M? "J": "M";
    answer += test.A >= test.N? "A": "N";
    return answer;
    
}