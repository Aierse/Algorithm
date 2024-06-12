export function solution(code: string) {
  let mode = false;
  let ret = "";

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      mode = !mode;
      continue;
    }

    const isOdd = i % 2 === 1;

    if (mode && isOdd) ret += code[i];
    if (!mode && !isOdd) ret += code[i];
  }

  return ret ?? "EMPTY";
}

console.log(solution("abc1abc1abc"));
