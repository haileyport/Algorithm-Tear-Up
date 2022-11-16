function solution(cacheSize, cities) {
  //각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자,
  //대소문자 구분 x - toLowerCase나 toUpperCase 이용?

  //1번 "Jeju", "Pangyo", "Seoul", "NewYork", "LA" 2번 반복됨 - 캐시 사이즈 3, 실행시간 50
  //2번 "Jeju", "Pangyo", "Seoul" 3번 반복됨 - 캐시 사이즈 3, 실행시간 21
  //3번 "Jeju", "Pangyo", "Seoul" 3번 반복됨 - 캐시 사이즈 3, 실행시간 21

  //패턴을 모르겠음..

  //cache miss일 경우 실행시간은 5이다.

  // const take = (limit,iter) => {
  //     let res = [];
  //     for (const a of iter){
  //         res.push(a);
  //         if(res.length == limit) return res;
  //     }
  //     return res;
  // }

  let executedTime = 0;

  let cache = [];

  if (cacheSize === 0) return 5 * cities.length;

  cities.forEach((city) => {
    city = city.toLowerCase();
    if (cache.includes(city)) {
      //cache에 city가 들어있는 경우
      cache.splice(cache.indexOf(city), 1);
      executedTime += 1;
    } else {
      if (cache.length === cacheSize) cache.shift();
      executedTime += 5;
    }
    cache.push(city);
  });

  return executedTime;
}
