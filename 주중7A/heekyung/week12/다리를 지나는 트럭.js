function solution(bridge_length, weight, truck_weights) {

    let buffer = Array.from({ length: bridge_length }, () => 0)
    let answer = 0;
    let bufferSum = 0
    while (truck_weights.length > 0) {
        bufferSum = buffer.reduce((acc, cur) => acc + cur)
        //현재 버퍼안에 들어있는 값

        if ((bufferSum + truck_weights[0] - buffer[0]) <= weight) {
            // 버퍼 안의 값  + 다음에 들어올 값 - 이제 나갈 값
            buffer.shift()
            buffer.push(truck_weights[0])
            truck_weights.shift()
            answer++
        } else {
            buffer.shift()
            buffer.push(0)
            answer++
        }
    }
    answer += buffer.length;


    return answer;
}