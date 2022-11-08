function solution(arr) {
    var answer = 0;
    
    answer = (arr.reduce((acc, cur) => acc + cur ))/arr.length
    
    return answer;
}