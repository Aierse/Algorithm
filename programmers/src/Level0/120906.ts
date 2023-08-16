export function solution(n: number) {
  return [...n.toString()].map(Number).reduce((acc, cur) => (acc += cur));
}
