function solution(s) {

    let count = 0;
    for (let i = 0; i < s.length; i++) {

        //         if (s[i] === '('){
        //             count += 1
        //         }

        //         if (s[i] === ')'){
        //             count -= 1
        //         }
        count += s[i] === '(' ? 1 : -1;
        //삼항연산자 사용해주어야 효율성 테스트 통과 완료됨

        if (count < 0) {
            return false
        }
    }

    return count === 0 ? true : false
}
