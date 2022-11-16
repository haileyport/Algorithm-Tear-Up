function solution(record) {
  var answer = [];
  let log = [];
  let idName = {};
  
  record.forEach(el => {
      let rec = el.split(' ');
      
      if (rec[0] !== 'Change') log.push([rec[0], rec[1]])
      if (rec[0] !== 'Leave') idName[rec[1]] = rec[2]
  })
  
  log.forEach(el => {
      let action = (el[0] === 'Enter') ? '들어왔습니다.' : '나갔습니다.';
      let userName = idName[el[1]];
      answer.push(`${userName}님이 ${action}`);
  })
  
  return answer;
}