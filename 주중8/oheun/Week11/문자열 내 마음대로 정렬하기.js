/*
통과 여부 : 통과
시간 : 27분
점수 : +6

테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.6MB)
테스트 3 〉	통과 (0.06ms, 33.5MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.05ms, 33.5MB)
테스트 10 〉통과 (0.07ms, 33.4MB)
테스트 11 〉통과 (0.05ms, 33.6MB)
테스트 12 〉통과 (0.07ms, 33.5MB)
*/

/**
 * @todo index n번 값이 같으면 사전순으로 정렬해야 함.
 * @param {*} strings 길이 1~50 사이 소문자로 이뤄진 배열
 * @param {*} n 인덱스 n번째
 * @returns 인덱스 n번째 기준으로 오름차순 정렬
 */
function indexnSort(strings, n) {
    return strings.sort((a,b) => {
        if(a[n]>b[n]) return 1;
        if(a[n]<b[n]) return -1;
        return a>b?1:a<b?-1:0; 
    });
}