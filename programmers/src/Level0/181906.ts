export function solution(my_string: string, is_prefix: string) {
  return my_string.indexOf(is_prefix) === 0 ? 1 : 0;
}
