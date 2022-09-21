function solution(arr, divisor) {
    // 배열의 요소 중에 divisor로 나누어 떨어지는 값을 오름차순으로 정렬, 없다면 -1 반환
    arr = arr.filter(e => e % divisor === 0).sort((a,b) => a - b);
    
    return arr.length > 0 ? arr : [-1];
}