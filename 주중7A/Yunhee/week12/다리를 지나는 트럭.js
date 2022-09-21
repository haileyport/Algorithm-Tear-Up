function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = [];
    let bridge_weight = 0; // 다리 위 트럭의 무게

	// 모든 트럭이 지나갈 때까지 반복한다.
    while (truck_weights.length > 0) {
        answer++;

		// 만약 다리 위에 올라가 있는 트럭의 개수가 최대 개수와 같다면 다리 맨 앞의 값을 제거한다.
        if (bridge.length == bridge_length) {
            bridge_weight -= bridge.shift();
        }

		// 다리 위 트럭들의 무게와 새로운 트럭 무게의 합이 다리가 견딜 수 있는 무게보다 크다면 빈 공간(0)으로 다리를 채운다.
        if (bridge_weight + truck_weights[0] > weight) {
            bridge.push(0);
            continue;
        }

        let truck_weight = truck_weights.shift();

		// 위와 같은 상황이 아니라면 다리에 트럭을 추가한다.
        bridge.push(truck_weight);
        bridge_weight += truck_weight;
    }

	// 모든 트럭이 빠져나가면 다리에 최대 트럭 길이가 차고 반복문이 멈추므로 최대 트럭 길이를 더한다.
    answer += bridge_length;

    return answer;
}