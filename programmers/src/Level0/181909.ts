export function solution(my_string: string) {
  return Array.from(my_string, (_, i) => my_string.slice(i)).sort();
}
