function solution(fees, records) {
    let answer = [];
    
    // 오름차순으로 정렬된 차량 번호 배열
    let nums = records.map(e => e.split(" ")[1]).sort();
    nums = nums.filter((e, idx) => nums.indexOf(e) === idx);

    // 차량번호마다 주차 시간 계산하고 answer 배열에 추가
    for(let i = 0; i < nums.length; i++){
        // num[i]번째 차량 번호와 같은 차량 번호의 주차 내역을 가져온다.
        let record = records.filter(e => e.split(" ")[1] === nums[i]);
        // 각 내역마다 시간을 분단위로 바꾸고 totalTime 배열에 넣는다.
        let totalTime = record.map(e => {
            let time = e.split(" ")[0].split(":");
            let hour = time[0][0] === "0" ? time[0][1] : time[0]; 
            let minute = time[1];
            
            return hour * 60 + minute;
        })
        let sum = 0;
        
        // 출차 내역에서 입차 내역을 제해서 머문 시간을 계산하고 sum에 더한다.
        // 차량 번호가 주차한 총 시간을 알기 위함
        for(let j = 0; j < totalTime.length; i++){
            if(j % 2 === 0){
                sum += totalTime[j] - totalTime[j-1];
            }else if(j % 2 !== 0 && j === totalTime.length - 1){
                // 출차 내역이 없을 경우 23:59에 출차된 것으로 간주
                sum += 1439 - totalTime[j];
            }
        }
        
        // 주차 시간과 요금표로 계산해서 주차 요금을 계산한다.
        answer.push(fees[1] + ((sum - fees[0]) / fees[2]) * fees[3]);
    }
    
    return cost;
}
