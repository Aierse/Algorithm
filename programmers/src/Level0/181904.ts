export function solution(my_string: string, m: number, c: number) {
  return [...my_string].filter((v, i) => i % m === c - 1).join("");
}
