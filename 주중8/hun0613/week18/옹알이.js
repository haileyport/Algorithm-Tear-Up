// 테스트 1 〉	통과 (0.19ms, 33.4MB)
// 테스트 2 〉	통과 (0.22ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.19ms, 33.5MB)
// 테스트 6 〉	통과 (0.31ms, 33.4MB)
// 테스트 7 〉	통과 (0.08ms, 33.4MB)
// 테스트 8 〉	통과 (0.17ms, 33.4MB)
// 테스트 9 〉	통과 (0.18ms, 33.4MB)
// 테스트 10 〉	통과 (0.18ms, 33.5MB)
// 테스트 11 〉	통과 (0.26ms, 33.4MB)
// 테스트 12 〉	통과 (0.31ms, 33.5MB)
// 테스트 13 〉	통과 (0.40ms, 33.6MB)
// 테스트 14 〉	통과 (0.44ms, 33.6MB)
// 테스트 15 〉	통과 (0.36ms, 33.5MB)
// 테스트 16 〉	통과 (0.36ms, 33.6MB)
// 테스트 17 〉	통과 (0.31ms, 33.6MB)
// 테스트 18 〉	통과 (0.32ms, 33.6MB)
// 테스트 19 〉	통과 (0.19ms, 33.5MB)
// 테스트 20 〉	통과 (0.25ms, 33.5MB)

// 12점..

function solution(babbling) {
    
    let speak = ["aya", "ye", "woo", "ma"];
    let word = "";
    let count = 0;
    
    
    babbling.forEach(el => {
        let speakPossible = "";
        
        for (let i of el){
            word += i;
            if (speakPossible === word){
                continue;
            }
            if (speak.includes(word)){
                speakPossible = word;
                word = ""
            }
        }
        if (word === ""){
            count ++;
        }else{
            word = ""
        }
    })
    
    return count;
}