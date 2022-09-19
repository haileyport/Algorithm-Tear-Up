function solution(strings, n) {
    let result = [...strings]
    result = result.sort(
        function(a,b){
            let word1 = a[n]
            let word2 = b[n]
            if(word1 < word2){
                return -1;
            }else if(word1 > word2){
                return 1;
            }else{
                if(a < b){
                    return -1;
                }
                    return 1;
            }
        }
    )
    return result;
}

//5점
//20분

