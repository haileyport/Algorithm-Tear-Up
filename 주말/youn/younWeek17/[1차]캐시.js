function solution(cacheSize, cities) {
  const city = cities.map((el) => el.toLowerCase());
  let result = [];
  let count = 0;
  for (let i = 0; i < city.length; i++) {
    if (!result.includes(city[i])) {
      result.push(city[i]);
      count = count + 5;
      if (result.length > cacheSize) {
        result.shift();
      }
    } else {
      count++;
      let idx = result.indexOf(city[i]);
      result.splice(idx, 1);
      result.push(city[i]);
    }
  }
  return count;
}
