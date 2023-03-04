export function solution(array: number[], height: number) {
  return array.filter((v) => v > height).length;
}
