function solution(fees, records) {
  var answer = [];

  //입출차 요금 계산
  //주차요금 배열 fees, 입출차 내역 records
  //fees = 기본시간(분), 기본요금(원), 단위시간(분), 단위요금(원)
  //records = '시간 차량번호 입출차'
  //차량번호가 작은 차부터 청구 요금을 배열에 담아서 return

  //주차 시간을 구해야함

  const cars = {};

  for (i = 0; i < records.length; i++) {
    const info = records[i].split(" ");
    if (cars[info[1]]) {
      cars[info[1]] = [...cars[info[1]], [info[2], info[0]]];
    } else {
      cars[info[1]] = [[info[2], info[0]]];
    }
  }

  const carFee = {};

  for (key in cars) {
    const list = cars[key];
    let time = 0;

    const last = list.reduce((acc, cur) => {
      const controller = cur[1].split(":").map(Number);
      const hour = controller[0] * 60;
      const min = controller[1];

      if (time === 0) {
        //첫 입차 출차 내역
        const controller2 = acc[1].split(":").map(Number);
        const hour2 = controller2[0] * 60;
        const min2 = controller2[1];
        time = hour + min - (hour2 + min2);
        return cur;
      } else if (cur[0] === "IN") {
        //재입차
        return cur;
      } else if (acc[0] === "IN" && cur[0] === "OUT") {
        //재입차 후 지금 하차
        const controller2 = acc[1].split(":").map(Number);
        const hour2 = controller2[0] * 60;
        const min2 = controller2[1];
        time += hour + min - (hour2 + min2);
        return cur;
      }
      return cur;
    });

    if (last[0] === "IN") {
      const controller = last[1].split(":").map(Number);
      const hour = controller[0] * 60;
      const min = controller[1];
      time += 24 * 60 - 1 - (hour + min);
    }

    let fee =
      time <= fees[0]
        ? fees[1]
        : fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];

    carFee[key] = fee;
  }

  console.log(carFee);

  const carKey = Object.keys(carFee);
  carKey.sort((a, b) => a - b);

  carKey.forEach((el) => {
    answer.push(carFee[el]);
  });

  return answer;
}

//정답!
