// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.10ms, 33.4MB)
// 테스트 8 〉	통과 (0.10ms, 33.4MB)
// 테스트 9 〉	통과 (0.09ms, 33.4MB)
// 테스트 10 〉	통과 (0.09ms, 33.4MB)
// 테스트 11 〉	통과 (0.08ms, 33.6MB)
// 테스트 12 〉	통과 (0.96ms, 33.7MB)
// 테스트 13 〉	통과 (0.37ms, 33.5MB)
// 테스트 14 〉	통과 (0.31ms, 33.6MB)
// 테스트 15 〉	통과 (0.17ms, 33.6MB)
// 테스트 16 〉	통과 (2.74ms, 34.3MB)
// 테스트 17 〉	통과 (2.44ms, 34.4MB)
// 테스트 18 〉	통과 (2.02ms, 34.2MB)
// 테스트 19 〉	통과 (1.11ms, 33.9MB)
// 테스트 20 〉	통과 (0.70ms, 33.8MB)

function solution(nums) {
    
    let obj = {};
    
    nums.forEach(el => {
        if (!obj[el]){
            obj[el] = true;
        }
    })
    
    let getItem = nums.length / 2;
    let kindsOfItem = Object.keys(obj).length;
    
    if (getItem > kindsOfItem){
        return kindsOfItem;
    }else {
        return getItem;
    }
}