// [PGS] 음양 더하기 / leve1
// 난이도 :  level 1
// 풀이시간 : 
// 점수 : .

/*
문제
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

제한사항
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
입출력 예
absolutes	signs	result
[4,7,12]	[true,false,true]	9
[1,2,3]	[false,false,true]	0
입출력 예 설명
입출력 예 #1

signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
따라서 세 수의 합인 9를 return 해야 합니다.
입출력 예 #2

signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
따라서 세 수의 합인 0을 return 해야 합니다.
*/

/*
< 의사코드 >
1. 양수와 음수를 따로 담을 수 있도록 각각 숫자형으로 선언한다.
2. for문으로 signs을 돌며 참인지 거짓인지 확인하여 참이라면 양수에 담고 거짓이라면 음수에 담아서 더해준다
3. 양수를 모두 더한Pnum에서 음수를 모두 더한Mnum를 뺀 값을 return한다.
*/

function solution(absolutes, signs) {
    let result = 0;
    let Pnum = 0;
    let Mnum = 0;
    
    for(let i = 0; i < signs.length; i++) {
        if(signs[i] === true) {
            Pnum += absolutes[i];
        } else if(signs[i] === false) {
            Mnum += absolutes[i];
        }
        result = Pnum - Mnum;
    }
    return result;
}

/*
테스트 1 〉	통과 (0.12ms, 29.9MB)
테스트 2 〉	통과 (0.13ms, 30MB)
테스트 3 〉	통과 (0.12ms, 30.1MB)
테스트 4 〉	통과 (0.13ms, 30MB)
테스트 5 〉	통과 (0.17ms, 30.1MB)
테스트 6 〉	통과 (0.11ms, 30MB)
테스트 7 〉	통과 (0.12ms, 30MB)
테스트 8 〉	통과 (0.13ms, 30.2MB)
테스트 9 〉	통과 (0.12ms, 30.1MB)
*/

/*
< 의사코드 >
줄일 수 있는 코드를 줄여보았다
하지만 속도는 늘어났다
*/

function solution(absolutes, signs) {
    let Pnum = 0;
    let Mnum = 0;
    
    for(let i = 0; i < signs.length; i++) {
        signs[i] === true ? Pnum += absolutes[i] : Mnum += absolutes[i];
    }
    return Pnum - Mnum;
}

/*
테스트 1 〉	통과 (0.14ms, 33.4MB)
테스트 2 〉	통과 (0.14ms, 33.5MB)
테스트 3 〉	통과 (0.14ms, 33.5MB)
테스트 4 〉	통과 (0.16ms, 33.6MB)
테스트 5 〉	통과 (0.14ms, 33.4MB)
테스트 6 〉	통과 (0.14ms, 33.5MB)
테스트 7 〉	통과 (0.14ms, 33.4MB)
테스트 8 〉	통과 (0.14ms, 33.4MB)
테스트 9 〉	통과 (0.14ms, 33.5MB)
*/

/*
< 의사코드 >
구조분해할당에 마가 끼었나?
이거 하나로 이렇게 속도가 늘어난다구?;;
*/

function solution(absolutes, signs) {
    let [Pnum, Mnum] = [0, 0];
    
    for(let i = 0; i < signs.length; i++) {
        signs[i] === true ? Pnum += absolutes[i] : Mnum += absolutes[i];
    }
    return Pnum - Mnum;
}

/*
테스트 1 〉	통과 (0.16ms, 33.5MB)
테스트 2 〉	통과 (0.16ms, 33.4MB)
테스트 3 〉	통과 (0.16ms, 33.4MB)
테스트 4 〉	통과 (0.17ms, 33.5MB)
테스트 5 〉	통과 (0.18ms, 33.5MB)
테스트 6 〉	통과 (0.16ms, 33.4MB)
테스트 7 〉	통과 (0.17ms, 33.4MB)
테스트 8 〉	통과 (0.16ms, 33.4MB)
테스트 9 〉	통과 (0.18ms, 33.4MB)
*/


// 속도 줄이기 포기!