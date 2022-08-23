const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split("\n");
// const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const pokemonNum = Number(input[0].split(' ')[0]);
const pokemons = input.slice(1, pokemonNum + 1);
const quizzes = input.slice(pokemonNum + 1);

const pokemonMap = new Map(pokemons.map((v, i) => [v, i+1]));
let result = [];

for (const problem of quizzes) {
  let isNumber = /[0-9]/; 

  if (isNumber.test(problem)) {
    result.push(pokemons[problem - 1])
  } else {
    result.push(pokemonMap.get(problem))
  }
}

console.log(result.join('\n'))