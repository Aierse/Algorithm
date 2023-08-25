export function solution(my_str: string, n: number) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
}
