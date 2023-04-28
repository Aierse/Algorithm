export function solution(str_list: string[], ex: string) {
  return str_list.filter((v) => !v.includes(ex)).join("");
}
