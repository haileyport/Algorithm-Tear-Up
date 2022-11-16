function solution(numbers) {
    // 정수를 이어 붙여 만들 수 있는 가장 큰 수 반환
    const result = numbers
                    .map(number => number.toString())
                    .sort((a, b) => (b+a) - (a+b))
                    .join("");
    
    return result[0] === "0" ? "0" : result;
}