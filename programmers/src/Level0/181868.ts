export function solution(my_string: string) {
  return my_string.split(" ").filter((v) => v !== "");
}
