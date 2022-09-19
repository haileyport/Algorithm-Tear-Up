function solution(s) {

    if ((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) {
        return true
    } else {
        return false
    }
    //^[0-9]*$/ 가 숫자만 있는지 확인할때 가장 많이 쓰는 방법
    //test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true 또는 false로 반환
}