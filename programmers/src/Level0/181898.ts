export function solution(arr: number[], idx: number) {
  return arr.findIndex((v, i) => v === 1 && i >= idx);
}
