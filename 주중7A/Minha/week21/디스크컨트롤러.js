function solution(jobs) {
    let total = 0;
    let q = []; //다음 작업 후보들
    // 작업요청시점 기준 오름차순 정렬
    jobs.sort((a, b) => a[0] - b[0]); 
    let len = jobs.length;
    let i = 0;
    let now = 0;
    while (i < len || q.length > 0) {
        // 작업요청시점이 현재 작업 소요 시간보다 적을경우 q에 추가
        if (i < len && jobs[i][0] <= now) {
            q.push(jobs[i++]);
            continue;
        }
        q.sort((a,b) => a[1] - b[1]); // 작업 가능한 task중 짧은 소요시간부터
        if (q.length > 0) {
            let job = q.shift();
            now += job[1]; // 작업 종료 시점
            total += now - job[0]; // 작업 종료 시점 - 작업 요청 시점 = 걸린시간
        } else {
            now = jobs[i][0]; // 현재 작업중인 task 교체
        }
    }

    return Math.floor(total / len);
}