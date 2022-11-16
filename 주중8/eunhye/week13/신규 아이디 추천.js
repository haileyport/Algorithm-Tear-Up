// 예전에 풀었던 문제

//예전 풀이 - 스텝별로 나눠서 실행

function solution(new_id) {
  const one = new_id.toLowerCase();
  const two = one.replace(/[^a-z 0-9 \-\_\.]+/g, "");
  const three = two.replace(/\.{1,}/g, ".");
  const four = three.replace(/^\./, "");
  var five = "";
  if (four == "") {
    five = "a";
  } else {
    five = four;
  }
  const six = five.substr(0, 15).replace(/\.$/, "");
  var seven = six;
  while (seven.length < 3) {
    const repeat = seven.substr(seven.length - 1);
    seven = seven + repeat;
  }
  var answer = seven;
  return answer;
}

// 메모리: 29.8 MB, 시간: 0.28 ms

// 다시 풀이 - 체이닝

function solution(new_id) {
  const one = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/, "a")
    .replace(/\.$/, "")
    .slice(0, 15)
    .replace(/\.$/, "");

  const len = one.length;

  return len > 2 ? one : one + one.charAt(len - 1).repeat(3 - len);
}

// 메모리: 33.4 MB, 시간: 0.27 ms
