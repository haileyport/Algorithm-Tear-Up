// [PGS] 짝지어 제거하기 / leve2
// 난이도 :  level 2
// 풀이시간 : 진행중
// 점수 : 

/*
문제
짝지어 제거하기는, 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = baabaa 라면

b aa baa → bb aa → aa →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.

제한사항
문자열의 길이 : 1,000,000이하의 자연수
문자열은 모두 소문자로 이루어져 있습니다.
입출력 예
s	result
baabaa	1
cdcd	0
입출력 예 설명
입출력 예 #1
위의 예시와 같습니다.
입출력 예 #2
문자열이 남아있지만 짝지어 제거할 수 있는 문자열이 더 이상 존재하지 않기 때문에 0을 반환합니다.

/*
< 의사코드 >
1. for문으로 i번째 index와 i+1번째의 index가 같을 경우 0~i번째와 i+1~ -1로 silce한 두 개의 배열을 concat한다.
2. 재귀로 반복해서 길이가 0이 될 경우 1을, 1이상일 경우 -1를 return한다.
실패
*/

function solution(s){
    if(s.length === 0) {
        return 1
    }
    for(let i = 0; i < s.length; i++) {
        if(s[i]===s[i+1]) {
            return s.slice(0,i).concat(s.slice(i+2))
        }
    }
    return solution(s)
}
/*
< 의사코드 >
1. for문으로 배열 s의 index의 i번째를 확인하는 것은 위의 방법과 동일
2. s에서 splice로 i번째에서 2개를 제거한다.
3. 재귀로 돌리려 했으나 if문 안에서 i를 다시 -1로 초기화 해주면 될듯하여 그렇게 진행했다.
실패
*/

function solution(s){
    for(let i = 0; i < s.length; i++) {
        if(s[i]===s[i+1]) {
            s.splice(i,2);
            i = -1;
        }
    }
    return s.length === 0 ? 1 : 0
}
  

/*
< 의사코드 >
s가 문자열인데 배열로 생각하면서 풀이해서 오류가 났었다.
마지막에 배열의 길이를 삼항연산자로 확인하여 바로 return 했다.
*/
function solution(s){
    let newArr = s.split("")
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i]===newArr[i+1]) {
            newArr.splice(i,2);
            i = -1;
        }
    }
    return newArr.length === 0 ? 1 : 0
}

/*
시간초과....
*/

