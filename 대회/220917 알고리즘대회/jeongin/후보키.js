function solution(relation) {
  var answer = 0;
  let len = relation[0].length;
  
  for (let i = 0; i < len; i++) {
      let set = new Set(relation.map(el => el[i]))
      if (set.size === relation.length) {
          answer++
          relation = relation.map(el => {
              el.splice(i, 1) 
              return el
          })
      }
  }
  
  if (relation.length <= 1) return answer;
  
  for (let i = 0; i < len; i++) {
      for (let j = 1; j <= len; j++) {
          let set = new Set(relation.map(el => String(el.slice(i, j))))
          if (set.size === relation.length) {
              answer++;
              break;
          }
      }
  }
  
  return answer;
}