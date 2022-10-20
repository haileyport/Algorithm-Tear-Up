function solution(arr) {
    let answer = [];
    arr.forEach((n, idx) => {
        if (n !== arr[idx - 1]) answer.push(n);
    })
    return answer;
}

// arr을 순회하면서 이전 요소와 다른 요소만 답 배열에 추가
