function solution(n, wires) {
    var answer = [];
    var testNetwork = {}; // {idx : [[network_01], [network_02]]}
    
    function bfsNetwork(networkKey, isFirstNetwork, wires) {
        var networkIdx = isFirstNetwork ? 0 : 1;
        var networkLen = testNetwork[networkKey][networkIdx].length - 1;
        var lastItem = testNetwork[networkKey][networkIdx][networkLen];
        var nextItems = wires.filter(v => v.includes(lastItem));
        nextItems.length && nextItems.forEach((v, idx) => {
            var addedItem = (lastItem === v[0]) ? v[1] : v[0];
            if(testNetwork[networkKey][networkIdx].includes(addedItem)) {
                return;
            }
            testNetwork[networkKey][networkIdx].push(addedItem);
            var removedWires = wires.filter(wire => !(wire[0] === v[0] && wire[1] === v[1]));
            bfsNetwork(networkKey, isFirstNetwork, removedWires);
        });
    }
    
    // 1. 전선 하나씩 없애가면서 분할된 네트워크 bfs로 찾기
    wires.forEach((wire, idx)=> {
        testNetwork[idx] = [[], []];
        var removedWire = wires.filter(v => !(wire[0] === v[0] && wire[1] === v[1]));
        testNetwork[idx][0].push(wire[0]);
        testNetwork[idx][1].push(wire[1]);  
        bfsNetwork(idx, true, removedWire); // 첫번째 네트워크 망
        bfsNetwork(idx, false, removedWire); // 두번째 네트워크 망
    });
    
    // 2. 분할된 네트워크 중 송전탑 개수 최소인 경우 return
    for(var item in testNetwork) {
        answer.push(Math.abs(testNetwork[item][0].length-testNetwork[item][1].length));
    }
    return Math.min(...answer);
}
