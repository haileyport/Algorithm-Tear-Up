function solution(n) {
  let front = n.slice(0, -4);
  let back = n.slice(-4);
  front = front.replace(/[0-9]/g, "*");
  return front + back;
}
