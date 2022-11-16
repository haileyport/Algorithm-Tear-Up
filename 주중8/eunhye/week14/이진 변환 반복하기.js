function solution(s) {
  let trans = s;
  let origin = s;
  const ans = [0, 0];

  while (trans.length > 1) {
    ans[0]++;

    trans = trans.replace(/0/g, '');
    const len = trans.length;
    ans[1] += origin.length - len;

    trans = len.toString(2);
    origin = trans;
  }

  return ans;
}
