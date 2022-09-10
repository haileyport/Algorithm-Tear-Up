function solution(clothes) {
  var answer = 1;
  let map = new Map();

  //for 문 반복하며 옷 item 종류 map에 저장
  for (let i = 0; i < clothes.length; i++) {
    let cur_item = clothes[i][1]; // headgear, eyewear, face 등

    if (!map.has(cur_item))
      map.set(cur_item, 1); // map.set("headgear", 1)
    else
      map.set(cur_item, map.get(cur_item) + 1); // map.set("headgear", 2)
  }

  /*
      console.log(map);
      // Map(2) { 'headgear' => 2, 'eyewear' => 1 }
  */

  // 옷 종류 연산(경우의 수)
  for (let num of map.values())
    answer *= num + 1; // 각 item을 착용하지 않는 경우 포함. answer = 3*2 = 6


  // 모두 선택하지 않은 경우는 제외
  return answer - 1;


}