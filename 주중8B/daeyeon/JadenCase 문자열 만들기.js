/* 10분 100 100 */
// <7번째 줄 if문> (공백이 연속으로 나올경우) "  " ->  === "" 이므로 값이 있을때만 실행하도록했습니다

function solution(s) {

    return s.split(" ").map((el) => {
        if (el[0]) {  
            let sen = el[0].toUpperCase();
            for (let i = 1; i < el.length; i++) {
                sen = sen + el[i].toLowerCase();
            }
            return sen;
        }
    }).join(" ")
}