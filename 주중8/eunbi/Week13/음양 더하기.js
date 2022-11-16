//[PGS] 음양 더하기, +1
// 소요시간 : 7.33분 

// 입력받은 부호관련 배열을 mapping하여 해당하는 부호를 붙여 새 배열 반환 
// 새 배열에 reduce 메서드 이용하여 합해주기! 

//reduce 메서드에도 index 파라미터를 받을 수 있는지 몰랐다 ㅎㅎ..
// return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
function solution(absolutes, signs) {
  let arr = signs.map((el, i) =>  el ? absolutes[i] : -absolutes[i]);
  
  return arr.reduce((prev,curr) => prev + curr , 0)
}