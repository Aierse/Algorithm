export function solution(order: number) {
  return [...order.toString()].reduce((acc, cur) => (acc += ["3", "6", "9"].includes(cur) ? 1 : 0), 0);
}
