function solution(X, Y) {
  var answer = "";

  X = [...X];
  Y = [...Y];
  console.log(X, Y);

  for (let i = 0; i < 10; i++) {
    const X_cnt = X.filter((item) => +item === i).length;
    const Y_cnt = Y.filter((item) => +item === i).length;
		answer += i.toString().repeat(Math.min(X_cnt, Y_cnt));
  }

  if (answer === "") {
    return "-1";
  } else if (answer.match(/[^0]/g) === null) { //전체다 0으로 되어있으면
    return "0";
  } else {
    return [...answer].sort((a,b)=>b-a).join("");
  }
}
