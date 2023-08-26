export function solution(my_string: string, num1: number, num2: number) {
  let answer = my_string.split("");
  [answer[num1], answer[num2]] = [answer[num2], answer[num1]];
  return answer.join("");
}
