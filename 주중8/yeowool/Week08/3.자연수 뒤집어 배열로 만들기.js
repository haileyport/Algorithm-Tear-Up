// 프로그래머스 자연수 뒤집어 배열로 만들기
// 난이도 :  level 1
// 풀이시간 :   10분 

/*
문제
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

제한 조건
n은 10,000,000,000이하인 자연수입니다.
입출력 예
n	return
12345	[5,4,3,2,1]
*/

/*
- 값을 담아줄 배열을 result로 선언한다.
- n을 split하기 위해 문자열로 변환하고 reverse로 순서를 뒤집어서 다시 map으로 숫자형태로 바꾸어준다
- arr를 for문을 활용하여 result에 차례로 담는다.
*/

function solution(n) {
    let result = [];
    let arr = String(n).split("").reverse().map((data) => Number(data))
    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i]
    }
    return arr;
}

/*
테스트 1 〉	통과 (0.14ms, 29.8MB)
테스트 2 〉	통과 (0.09ms, 30MB)
테스트 3 〉	통과 (0.10ms, 29.6MB)
테스트 4 〉	통과 (0.10ms, 29.8MB)
테스트 5 〉	통과 (0.07ms, 30MB)
테스트 6 〉	통과 (0.11ms, 29.9MB)
테스트 7 〉	통과 (0.11ms, 29.9MB)
테스트 8 〉	통과 (0.07ms, 30MB)
테스트 9 〉	통과 (0.06ms, 29.9MB)
테스트 10 〉	통과 (0.11ms, 29.8MB)
테스트 11 〉	통과 (0.08ms, 30.1MB)
테스트 12 〉	통과 (0.13ms, 30MB)
테스트 13 〉	통과 (0.10ms, 29.9MB)
*/

function solution(n) {
    let result = [];
    let arr = String(n).split("").reverse().map((data) => Number(data))
    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i]
    }
    return arr;
}

/*
테스트 1 〉	통과 (0.14ms, 29.8MB)
테스트 2 〉	통과 (0.09ms, 30MB)
테스트 3 〉	통과 (0.10ms, 29.6MB)
테스트 4 〉	통과 (0.10ms, 29.8MB)
테스트 5 〉	통과 (0.07ms, 30MB)
테스트 6 〉	통과 (0.11ms, 29.9MB)
테스트 7 〉	통과 (0.11ms, 29.9MB)
테스트 8 〉	통과 (0.07ms, 30MB)
테스트 9 〉	통과 (0.06ms, 29.9MB)
테스트 10 〉	통과 (0.11ms, 29.8MB)
테스트 11 〉	통과 (0.08ms, 30.1MB)
테스트 12 〉	통과 (0.13ms, 30MB)
테스트 13 〉	통과 (0.10ms, 29.9MB)
*/

/*
재미있는 사실
map((data) => Number(data))으로 숫자형태로 바꿔준것과
map(Number)을 통해 숫자형태로 바꾸어준 것이 시간 차이가 반이상 났다.
화살표함수를 사용하고 사용하지 않고의 차이가 이렇게 크다니
*/

function solution(n) {
    let result = [];
    let arr = String(n).split("").reverse().map(Number)
    for(let i = 0; i < arr.length; i++) {
        result[i] = arr[i]
    }
    return arr;
}

/*
테스트 1 〉	통과 (0.06ms, 29.7MB)
테스트 2 〉	통과 (0.05ms, 30.1MB)
테스트 3 〉	통과 (0.06ms, 29.9MB)
테스트 4 〉	통과 (0.05ms, 30MB)
테스트 5 〉	통과 (0.05ms, 29.9MB)
테스트 6 〉	통과 (0.08ms, 30MB)
테스트 7 〉	통과 (0.05ms, 30MB)
테스트 8 〉	통과 (0.05ms, 30MB)
테스트 9 〉	통과 (0.05ms, 29.8MB)
테스트 10 〉	통과 (0.05ms, 29.9MB)
테스트 11 〉	통과 (0.05ms, 30MB)
테스트 12 〉	통과 (0.05ms, 30.1MB)
테스트 13 〉	통과 (0.06ms, 29.9MB)
*/

/*
더 재미있는 사실은
split해주면 배열형태가 된다는것을 모르고 처음 문제풀때 
for문으로 같은짓을 반복한 나의 풀이^^..
웃기다 참ㅋㅋㅋㅋ
코드가 짧아지니 속도가 더 줄었다.
*/

function solution(n) {
    return String(n).split("").reverse().map(Number)
}

/*
테스트 1 〉	통과 (0.04ms, 30MB)
테스트 2 〉	통과 (0.04ms, 30MB)
테스트 3 〉	통과 (0.06ms, 29.9MB)
테스트 4 〉	통과 (0.03ms, 30.2MB)
테스트 5 〉	통과 (0.03ms, 29.8MB)
테스트 6 〉	통과 (0.04ms, 30.1MB)
테스트 7 〉	통과 (0.03ms, 30MB)
테스트 8 〉	통과 (0.05ms, 29.8MB)
테스트 9 〉	통과 (0.04ms, 30MB)
테스트 10 〉	통과 (0.03ms, 29.7MB)
테스트 11 〉	통과 (0.03ms, 30MB)
테스트 12 〉	통과 (0.04ms, 30MB)
테스트 13 〉	통과 (0.03ms, 30MB)
*/