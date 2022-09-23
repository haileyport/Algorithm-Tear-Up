function solution(bridge_length, weight, truck_weights) { 
  let time = 0;
  let bridge = [];    
  let bridge_weight = 0;

  while (truck_weights.length)  { //  > 0 안해도 truthy 
    time++;
    let truck = truck_weights[0]; // 가장 앞의 트럭

    // 이미 다 찬 다리는 가장 앞에 트럭을 빼고, 다리 무게도 수정
    if (bridge.length == bridge_length) {
        bridge_weight -= bridge.shift();
    }

    // 무게 초과하면 다리에 트럭 대신 0을 올리고 다음 타임으로 
    if (bridge_weight + truck > weight) {
        bridge.push(0); // -> 왜 해야
        continue;
    } 

    // 무게 초과 안하면 트럭 목록에서 제일 앞 트럭을 빼고, 다리에 트럭을 올리고 다리 무게도 수정
    truck_weights.shift();
    bridge.push(truck);
    bridge_weight += truck;
  }

  return time + bridge_length; 
  // -> 마지막 트럭이 다리에 올라가면 트럭 목록이 비어서 반복문이 종료되기 때문에?
}
