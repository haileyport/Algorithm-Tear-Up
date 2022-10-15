function solution(array, commands) {
  const arr = [];

  for (i = 0; i < commands.length; i++) {
    const el = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b)[commands[i][2] - 1];
    arr.push(el);
  }
  return arr;
}

//1점
