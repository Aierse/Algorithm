export function solution(n: number) {
  return Array<number>(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((v) => n % v === 0);
}
