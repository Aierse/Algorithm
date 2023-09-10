export function solution(arr: number[], flags: boolean[]) {
  let answer: number[] = [];

  flags.forEach((v, i) => {
    if (v) answer = [...answer, ...Array(arr[i] * 2).fill(arr[i])];
    else {
      for (let x = 0; x < arr[i]; x++) {
        answer.pop();
      }
    }
  });

  return answer;
}
