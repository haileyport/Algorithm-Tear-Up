function solution(s) {
  let eng = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
  eng.forEach(word => {
      let regex = new RegExp(word, "g");
      s = s.replace(regex, eng.indexOf(word))
  })

  return Number(s);
}