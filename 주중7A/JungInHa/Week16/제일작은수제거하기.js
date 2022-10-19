function solution(arr) {
    if (arr.length === 1) return [-1];
    let minIdx = arr.indexOf(Math.min(...arr));
    let answer = arr;
    answer.splice(minIdx, 1);
    return answer;
}

// 리턴하려는 배열이 빈 배열인 경우(=arr에 수가 하나만 있는 경우)엔 배열에 -1을 채워 리턴
// arr 에서 가장 작은 수를 제거한 배열을 리턴 (정렬 X!!)
	// 가장 작은 수의 인덱스를 구해서 제거 
