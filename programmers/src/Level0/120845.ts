export function solution(box: number[], n: number) {
  return box.map((v) => Math.floor(v / n)).reduce((acc, cur) => acc * cur);
}
