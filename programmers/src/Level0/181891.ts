export function solution(num_list: number[], n: number) {
  return [...num_list.slice(n), ...num_list.slice(0, n)];
}
