export function solution(n: number, numlist: number[]) {
  return numlist.filter((v) => v % n === 0);
}
