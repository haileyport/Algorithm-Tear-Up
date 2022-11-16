function solution(s) {
  let count = 0;

  [...s].forEach(c => {
    if (c.toLowerCase() === "p") count++;
    if (c.toLowerCase() === "y") count--;
  });

  return (count === 0) ? true : false;
}