function solution(bridge_length, weight, truck_weights) {
  let count = 0;
  let queue = [];
  let total = 0;

  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }

  let cur = truck_weights.shift();

  queue.unshift(cur);
  queue.pop();

  total = total + cur;
  count++;

  while (total) {
    total = total - queue.pop();
    cur = truck_weights.shift();

    if (cur + total <= weight) {
      queue.unshift(cur);
      total = total + cur;
    } else {
      truck_weights.unshift(cur);
      queue.unshift(0);
    }

    count++;
  }
  return count;
}
