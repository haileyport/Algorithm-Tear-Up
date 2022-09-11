function solution(n, m) {
    let answer = [];
    let num = n > m ? n : m;
    let max = 0;
    let min = 0;

    for (let i = 1; i <= num; i++) {
        if (n % i === 0 && m % i === 0)
            //  n과 m이 같은 수로 나누어 떨어진다면 최대공약수
            max = i;
    }
    min = n * m / max;
    // 최소공배수는 두 수의 곱 / 최소공배수
    answer = [max, min];
    return answer;
}
