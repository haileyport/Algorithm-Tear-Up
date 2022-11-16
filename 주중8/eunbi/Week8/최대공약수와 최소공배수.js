//[PGS] 평균구하기
// 소요시간: 23분 18초 

// 최대공약수, 최소공배수 구하는 알고리즘 찾아보느라 오래걸림 ㅠ
// 최대공약수는 유클리드 호제법이란게 있다. 
// 두 정수 a, b가 있을 때 a % b 의 나머지를 r이라 하고, r이 0이 아니라면,
// b % r 로 진행 이런식으로 r = 0 이 될 때까지 반복한다. 
// r = 0 이 되기 전의 r이 최대공약수가 된다. 
// 최소공배수는 a*b 를 최대공약수인 r로 나누어 나온 몫이 되게 된다. 

function solution(n, m) {
    let answer = new Array(2);
    let a = n;
    let b = m;

    //최대공약수
    while(a % b !== 0){
        let left = a % b ; 
        a = b;
        b = left;
    }
    answer[0] = b ; 
    // 최소공배수 
    answer[1] = (n * m) / b ;
    return answer;
}