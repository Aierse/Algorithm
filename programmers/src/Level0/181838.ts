export function solution(date1: number[], date2: number[]) {
  return +(new Date(date1.join("-")) < new Date(date2.join("-")));
}
