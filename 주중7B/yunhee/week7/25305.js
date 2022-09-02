/* 25305번 커트라인 */

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

function solution(input){
    // n명의 사람 중에 점수가 가장 높은 k명이 상을 받는다.
    // 상을 받은 사람 중 가장 낮은 점수를 구하라.
    let n = input[0].split(" ")[0]; // 총 학생
    let k = input[0].split(" ")[1]; // 상을 받는 학생 수

    let stdArr = input[1].split(" ").sort((a, b) => b - a); // 정렬된 학생들의 점수

    console.log(stdArr[k-1]);
}

solution(input);