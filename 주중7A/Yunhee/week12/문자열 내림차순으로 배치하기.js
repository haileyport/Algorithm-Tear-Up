function solution(s) {
    // 문자열을 큰것부터 작은 순으로 정렬해서 새로운 문자열 리턴
    // 단, 대문자는 소문자보다 작은 것으로 간주한다.
    return s.split("").sort((a, b) => {
        let isAUpperCase = a.toUpperCase() === a;
        let isBUpperCase = b.toUpperCase() === b;

        // a, b 둘 다 대문자라면?
        if((isAUpperCase && isBUpperCase) || (!isAUpperCase && !isBUpperCase)){
            if(a > b){
                return -1;
            }else{
                return 1;
            }
        }else if(isAUpperCase || isBUpperCase){
            // 둘 중 하나만 대문자라면?
            if(isAUpperCase){
                // a가 대문자
                return 1;
            }else{
                // b가 대문자
                return -1;
            }
        }
    }).join("");
}