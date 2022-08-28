function solution(s) {
  let answer = s.length;
  let max = s.length;
      
  for (let i = 1; i < max; i++) { 
      var regex = new RegExp('.{1,' + i + '}', 'g');
      let cut = s.match(regex);
      
      let compressed = '';
      let repeated = 1;
      
      for (let j = 0; j < cut.length; j++) {
          if (cut[j] === cut[j+1]) repeated++;
          else {
              if (repeated > 1) compressed += repeated + cut[j]
              else compressed += cut[j];
              
              repeated = 1;
          }
      }
      
      if (compressed.length < answer) answer = compressed.length;
  }
 return answer;
}