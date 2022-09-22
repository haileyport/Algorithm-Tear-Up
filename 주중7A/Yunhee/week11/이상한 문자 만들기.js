function solution(s) {
    // 각 단어의 짝수번째 알파벳은 대문자,  홀수번째는 소문자
    return s.split(" ").map(e => {
        return e.split("")
                .map((el, idx) => idx % 2 === 0 ? el.toUpperCase() : el.toLowerCase())
                .join("")
    }).join(" ");
}