export function solution(numbers: number[], n: number) {
  let answer = 0;
  for (const number of numbers) {
    answer += number;

    if (answer > n) return answer;
  }
}
