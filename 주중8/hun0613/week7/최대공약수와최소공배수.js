//풀이시간 : 37분
//점수 : 7점 😎

function solution(n, m) {
    var answer = [];
    let column = [];
    
    // 작은값은 num1로, 큰 값은 num2로 (나눗셈을 위해서)
    let num1 = Math.min(n,m);
    let num2 = Math.max(n,m);
    
    // 만약 num2에 num1이 나누어 떨어진다면, 
    /*
     num1  | num1     num2
           |__________________
              1   num2 / num1
     */

    // num1이 최대공약수, num1 * 1 * num2가 최소공약수
    if (num2 % num1 === 0){
        answer.push(num1);
        answer.push(num1 * Math.round(num2 / num1))
    }else{
        // 그렇지않다면, 2부터 시작해서 num1만큼 돌면서 나눠봐서 num1, num2 둘다 공통적으로 나누어떨어지는 값이라면
        for (let i = 2; i < num1;){
            if (num1 % i === 0 && num2 % i === 0){
                // num1, num2는 나눈 몫으로 재 할당
                num1 = num1 / i;
                num2 = num2 / i;
                
                // 나누어떨어진 값은 column에 푸쉬
                column.push(i);
                // i는 다시 2로 초기화
                i = 2;
            }else{
                // 둘다 나누어 떨어지지 않다면, i를 하나씩 올리기
                i++;
            }
        }
        

        // 만약 column에 아무것도 없다면 (공통으로 나누어 떨어지는 값이 없으면)
        if(column.length === 0){
            // 최대공약수는 1
            answer.push(1);
            // 최소공배수는 num1 * num2
            answer.push(num1 * num2);
        }else{

            // GCD에 column에 들어간 값 모두 곱하기 -> 최대공약수
            let GCD = column.reduce((cur, acc) => cur * acc);
            answer.push(GCD);

            // GCD와 num1, num2를 곱한 값이 최소공배수
            answer.push(GCD * num1 * num2);
        }
    }
    
    return answer;
}