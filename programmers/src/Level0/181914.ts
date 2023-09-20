export function solution(number: string) {
  return number.split("").reduce((acc, cur) => acc + +cur, 0) % 9;
}
