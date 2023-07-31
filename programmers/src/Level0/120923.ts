export function solution(num: number, total: number) {
  return Array<number>(num)
    .fill(Math.ceil(total / num) - Math.floor(num / 2))
    .map((v, i) => v + i);
}
