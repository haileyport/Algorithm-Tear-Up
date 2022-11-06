function solution(numbers) {
    if (numbers.filter(n => n !== 0).length == 0) return "0";
    var answer = numbers
        .sort((a, b) => ((b + '') + a) - ((a + '') + b))
        .join('');
    return answer;
}
