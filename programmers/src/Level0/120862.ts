export function solution(numbers: number[]) {
  numbers.sort((a, b) => a - b);
  const [max1, max2] = [numbers[0] * numbers[1], numbers.at(-1)! * numbers.at(-2)!];

  return Math.max(max1, max2);
}
