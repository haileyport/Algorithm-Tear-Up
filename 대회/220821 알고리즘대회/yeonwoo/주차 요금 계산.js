function solution(fees, records) {
  const obj = {};

  records.forEach((str) => {
    let key = str.split(" ")[1];
    obj[key] !== undefined
      ? (obj[key] = [...obj[key], str])
      : (obj[key] = [str]);
  });

  function calculator(obj, fees) {
    // const arr = Object.entries(obj).sort((a,b) => a-b); console.log(arr);
    const keys = Object.keys(obj);
    console.log(keys);
    let isOut = true;
    let sum = 0;

    console.log(obj);
    console.log(isOut);

    if (isOut) {
      for (let i = 0; i < keys.length; i++) {
        console.log(keys.length, i);
        console.log(obj[keys[i]].length, "length");
        let length = obj[keys[i]].length;
        for (let j = 0; j < length; j += 2) {
          console.log(j, "j");
          if (j + 1 !== length) {
            sum +=
              (Number(obj[keys[i]][j + 1].split(" ")[0].split(":")[0]) -
                Number(obj[keys[i]][j].split(" ")[0].split(":")[0])) *
                60 +
              Number(obj[keys[i]][j + 1].split(" ")[0].split(":")[1]) -
              Number(obj[keys[i]][j].split(" ")[0].split(":")[1]);
          } else {
            sum +=
              (23 - Number(obj[keys[i]][j].split(" ")[0].split(":")[0])) * 60 +
              59 -
              Number(obj[keys[i]][j].split(" ")[0].split(":")[1]);
          }
        }
        Array.isArray(obj[keys[i]])
          ? (obj[keys[i]] = sum)
          : (obj[keys[i]] += sum);
        sum = 0;
      }
      console.log(obj);

      keys.forEach((key) => {
        if (obj[key] > fees[0]) {
          obj[key] =
            fees[1] + Math.ceil((obj[key] - fees[0]) / fees[2]) * fees[3];
        } else {
          obj[key] = 0;
        }
      });

      return keys
        .map(Number)
        .sort()
        .map((key) => (key < 1000 ? obj["0" + key] : obj[key]));
    }
  }

  return calculator(obj, fees);
}

// 추가 요금은 올림으로 계산 Math.ceil()
// [ a ] ? 머임?

// 입력 : 1) number[], 주차 요금 2) string[], 자동차 입/출차 내역
// 출력 : number[], **차량 번호가 작은 자동차부터**(sort) 청구할 주차 요금을 차례대로 담은 배열

// 주의사항 : 1) 입력 number[] === [기본 시간, 기본 요금, 단위 시간, 단위 요금] 2) 입력 string[] === ["시간 차량번호 내역", "시간 차량번호 내역", "시간 차량번호 내역", ...] 3) 하루 단위, 출차기록이 없으면 23:59 에 출차했다고 인식
