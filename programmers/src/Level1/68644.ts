export function solution(numbers: number[]) {
  let answer = new Set<number>();

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.add(numbers[i] + numbers[j]);
    }
  }

  return [...answer].sort((a, b) => a - b);
}
