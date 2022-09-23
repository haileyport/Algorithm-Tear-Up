function solution(arr) {
  if (arr.length > 1){
      let place = Math.min(...arr);
      let filtered = arr.filter((element) => element !== place);
      return filtered;
  }else{
      arr = [-1];
      return arr;
  }

}