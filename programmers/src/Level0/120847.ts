export function solution(numbers: number[]) {
  const max = Math.max(...numbers);
  numbers.splice(numbers.indexOf(max), 1);

  return max * Math.max(...numbers);
}
