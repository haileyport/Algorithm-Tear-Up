/* 4673번 셀프 넘버 */

/* d(n)은 n과 n의 각 자리수를 더하는 함수다 => d(75) = 75 + 7 +5 = 87 
여기서 75를 87의 생성자라고 한다(= n은 d(n)의 생성자)
생성자가 없는 숫자를 셀프 넘버라고 한다.
d(n)을 했을 때 나올 수 없는 수 => 1은 어떤 수를 더해도 1을 만들 수가 없다. 즉 생성자가 없다. */

function d(n) {
    let num = n;
    let result = 0;

    for(let i = 0; i < String(n).length; i++){
        // num을 10으로 나눠서 각 자리수를 result에 더한다.
        result += num % 10;
        num = Math.floor(num / 10);
    }

    // 입력받은 수와 result를 더해 반환한다.
    return n + result;
}

function solution(){ 
    const range = 10000;

    // 0 ~ 10000 범위까지 셀프 넘버 배열을 생성하고 true로 초기화
    let selfNumber = Array(range + 1).fill(true);

    for(let i = 0; i < range; i++){
        // 셀프 넘버가 아니면 false로 반환
        selfNumber[d(i)] = false;
    }

    // true index만 출력
    for(let i = 0; i < range; i++){
        if(selfNumber[i]){
            console.log(i);
        }
    }
}    

solution();