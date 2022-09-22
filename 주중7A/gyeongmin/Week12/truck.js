function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let queue = [];
    let total = 0;

    for(let i = 0; i < bridge_length; i++){
        queue.push(0);
    }
    let currentTruck = truck_weights.shift();
    queue.unshift(currentTruck);
    queue.pop();
    total += currentTruck;
    count++;
    while(total){
        total -= queue.pop();
        currentTruck = truck_weights.shift();

        if(currentTruck + total <= weight){
            queue.unshift(currentTruck);
            total += currentTruck;

        }else{
            truck_weights.unshift(currentTruck);
            queue.unshift(0);
        }
        count++;
    }
    return count;
}
