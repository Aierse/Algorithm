export function solution(num_list: number[], n: number) {
  const answer: number[] = [];

  num_list.forEach((v, i) => {
    if (i % n === 0) answer.push(v);
  });

  return answer;
}
