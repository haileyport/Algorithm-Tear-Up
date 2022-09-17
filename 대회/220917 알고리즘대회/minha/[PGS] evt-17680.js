function solution(cacheSize, cities) {
  let answer = 0;
  if (cacheSize === 0) return 5 * cities.length;
  // console.log(cacheSize, cities);
  //cites를 cacheSize로 쪼개기
  let items = [...(cities.map(el => el.toLowerCase()))]
  let sizeCities = [];

  while (items.length) {
    sizeCities.push(items.splice(0, cacheSize));
  }

  let cache = [];
  let cacheIndex = Array(cacheSize).fill(0); //접근 순서 기억할 index
  let lastCacheIndex = -1; // 캐시를 채울 때 마다 추가
  let indexNum = 1;
  sizeCities.forEach(arr => {
    arr.forEach(el => {
      //캐시에 공간이 남아있을 때
      if (cache.length < cacheSize) {
        // 근데 이미 있던것 (hit)
        if (cache.includes(el)) {
          //해당 index의 접근 순서 증가
          cacheIndex[lastCacheIndex] = indexNum;
          indexNum++;
          answer += 1;
        } else { // miss
          cache.push(el);
          cacheIndex[cache.length] = indexNum;
          indexNum++;
          answer += 5;
        }

      }
      // 꽉 찼을 때
      else {
        //hit
        if (cache.includes(el)) {
          // 실행시간 추가
          cacheIndex[lastCacheIndex] = indexNum;
          indexNum++;
          answer += 1;

        }
        //miss
        else {
          // 캐시 인덱스 정렬
          if (lastCacheIndex > cacheSize - 1) lastCacheIndex = 0;
          else lastCacheIndex += 1;
          //기존 캐시에 덮어쓰기
          cache[lastCacheIndex] = el;
          cacheIndex[cache.length] = indexNum;
          indexNum++;
          answer += 5;

        }
      }
    })

  })

  return answer;
}
