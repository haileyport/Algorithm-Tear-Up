function solution(cacheSize, cities) {
  let cache = [...new Array(cacheSize)].map((el) => 0);
  // Hit: 캐시 존재
  // Miss: 캐시 미존재

  let time = 0;
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  cities.forEach((el) => {
    // Hit 이면 맨앞으로 당겨오고, 나머지는 뒤로 밀기
    // Miss 이면 맨앞에 넣고, 마지막 제거
    el = el.toLowerCase();
    if (cache.includes(el)) {
      cache = cache.filter((city) => city !== el);
      cache.unshift(el);
      time += 1;
    } else {
      cache.pop();
      cache.unshift(el);
      time += 5;
    }
  });

  return time;
}
