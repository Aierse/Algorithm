export function solution(names: string[]) {
  return names.filter((_, i) => i % 5 === 0);
}
