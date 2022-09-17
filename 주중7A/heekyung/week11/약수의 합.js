function solution(n) {

    //         const divisors = [];
    //     for(let i = 1 ; i <= Math.sqrt(n) ; i++){
    //         if(n % i === 0) {
    //             divisors.push(i);
    //             if(n / i != i) divisors.push(n / i);
    //         }
    //     }

    //     let answer = divisors.reduce((acc,cur) => acc+cur)
    //     return answer;
    // 시간복잡도 O(n)
    // 정확성 1개 통과 x


    // 시간복잡도 O(n‾√) 
    // 더해주기만 하는 것이기 때문에 따로 약수를 구하지 않고 바로 더해준다.
    let sum = 0;
    for (let i = 1; i * i <= n; i++) {
        if (i * i == n) {
            sum += i;
        }
        else if (n % i == 0) {
            sum += i + n / i;
        }
    }
    return sum;
}
