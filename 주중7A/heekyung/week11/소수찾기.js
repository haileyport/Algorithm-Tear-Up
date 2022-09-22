//에라토스테네스의 체
/*
    2부터 n까지 자신을 제외한 배수를 제거하다 보면 소수만 남는다는 원리
    어떤 수의 배수가 되는 수는 다른 수로 나누어 떨어지기 때문에 소수가 될 수 없다.
*/


function solution(n) {
    let answer = 0;
    const arr = new Array(n + 1).fill(true); // 초깃값


    for (let i = 2; i <= Math.sqrt(n); ++i) {
        // 이미 소수가 아닌 인덱스는 건너뛴다.
        if (arr[i] === false) {
            continue;
        }
        // 소수가 아닌 데이터는 false로 입력한다.
        for (let k = i * i; k <= n; k += i) {
            arr[k] = false;
        }
    }
    // 소수의 갯수를 구한다.
    for (let i = 2; i <= n; ++i) {
        if (arr[i] === true) {
            answer++;
        }
    }
    return answer;
}

