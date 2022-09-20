function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  var answer = 0;
  let cache = new Array(cacheSize);
  
  cities.forEach(el => {
      el = el.toLowerCase();
      if (cache.indexOf(el) !== -1) { 
          answer += 1;
          cache.splice(cache.indexOf(el), 1);
          cache = [el, ...cache]
      } else {
          answer += 5;
          cache = [el, ...cache.slice(0, cacheSize - 1)]
      }
  })
  
  return answer;
}