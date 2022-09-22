function solution(strings, n) {
    // 21:51
    // 각 문자열의 n번째 글자를 기준으로 오름차순 정렬
    return strings.sort((a, b) => {
        if(a[n] > b[n]) return 1;
        if(a[n] < b[n]) return -1;
        
        // n번째 글자가 같다면 사전순으로 앞선 문자열이 앞쪽에 위치한다.
        if(a[n] === b[n]){
            if(a > b) return 1;
            if(a < b) return -1;
        }
    });
}