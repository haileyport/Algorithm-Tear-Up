// 테스트 1 〉	통과 (0.32ms, 33.4MB)
// 테스트 2 〉	통과 (0.37ms, 33.6MB)
// 테스트 3 〉	통과 (0.14ms, 33.4MB)
// 테스트 4 〉	통과 (0.28ms, 33.5MB)
// 테스트 5 〉	통과 (0.32ms, 33.5MB)
// 테스트 6 〉	통과 (0.46ms, 33.5MB)
// 테스트 7 〉	통과 (0.23ms, 33.5MB)
// 테스트 8 〉	통과 (0.35ms, 33.4MB)


function solution(n, arr1, arr2) {
    // n : 한 변의 길이
    // arr : 10진수로 이루어져있는 수의 배열
    
    // arr의 각 원소를 2진수로 바꿨을 때
    // 1 : #
    // 0 : 공백
    
    // 각 칸은 ""(공백) 또는 #(칸)
    // 지도는 arr1 , arr2 를 합쳐야 온전한 지도를 확인할 수 있다.
    // 하나라도 # 이면 #, 둘다 ""이면 ""
    
    // 최종적으로 얻은 지도(#, ""로 이루어져있는)를 리턴
    // -----------------------------------------------------------
    
    // arr1과 arr2의 각 원소들을 2진수로 변환 (map) 사용
    // ans 변수에 arr1과 arr2를 더하자
    // ans를 map으로 0인 부분은 ''로 0이 아닌 부분은 #으로 변환
    
    
    let arr1ToBinary = arr1.map(el => {
        let binary = el.toString(2);
        return binary.length === n ? binary : '0'.repeat(n - binary.length) + binary;
    });
    
    let arr2ToBinary = arr2.map(el => {
        let binary = el.toString(2);
        return binary.length === n ? binary : '0'.repeat(n - binary.length) + binary;
    })
    
    
    let answerToBinary =  arr1ToBinary.map((el, idx) => {
        return [...el].map((a, idx2) => {
            return Number(a) + Number(arr2ToBinary[idx][idx2])
        }).join('')
   
    })
    
    return answerToBinary.map(el => {
        return [...el].map(a => {
            return a === '0' ? ' ' : '#';
        }).join('')
    })
    
    
    
}