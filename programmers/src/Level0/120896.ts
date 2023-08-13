export function solution(s: string) {
  const list: { [key: string]: number } = {};
  let answer = [...s];

  answer.forEach((element) => {
    if (list[element] === undefined) list[element] = 1;
    else list[element]++;
  });

  return answer
    .filter((v) => list[v] === 1)
    .sort()
    .join("");
}
