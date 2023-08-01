export function solution(my_string: string) {
  return [...new Set(my_string)].join("");
}
