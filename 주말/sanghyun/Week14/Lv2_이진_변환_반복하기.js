function solution(s) {
  let counter = [0, 0];
  while(1){
      if(s === '1') break;
      
      let common = s.split('');
      counter[1] += common.filter(el => el === '0').length;
      s = common.filter(el => el !== '0').length.toString(2)
      counter[0]++;
  }
  return counter;
}