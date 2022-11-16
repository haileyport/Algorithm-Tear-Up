function solution(fees, records) {
  var answer = [];
  let parking = [];
  records = records.map(el => el.split(' '));
  records.map(el => {
    // 주차장에 없는 차 새로 등장
    if (!parking.includes(el[1])) parking.push(el[1]);
  });
  parking.sort();

  let parkingTime = Array(parking.length).fill(0);
  let lastInTime = '';
  parking.map(car => {
    let curCar = records.filter(el => el[1] === car);

    // 마지막이 입차라면 출차 기록 추가해주기
    if (curCar[curCar.length - 1][2] === 'IN') {
      curCar.push(['23:59', car, 'OUT']);
    }


    curCar.map(el => {
      // 입차 
      if (el[2] === 'IN') {
        lastInTime = Number(el[0].slice(0, 2)) * 60 + Number(el[0].slice(3));
      }
      // 출차
      if (el[2] === 'OUT') {
        let lastOutTime = Number(el[0].slice(0, 2)) * 60 + Number(el[0].slice(3));
        let time = lastOutTime - lastInTime; // 분으로 계산된 출차시각-입차시각
        parkingTime[parking.indexOf(el[1])] += time;
      }

    });

  });
  //요금 청구
  parkingTime.map(el => {
    // 기본 시간
    if (el <= fees[0]) answer[parkingTime.indexOf(el)] = fees[1];
    else {
      // 초과한 시간
      answer[parkingTime.indexOf(el)] = fees[1] +
        Math.ceil((el - fees[0]) / fees[2]) * fees[3];
    }

  });
  return answer;
}