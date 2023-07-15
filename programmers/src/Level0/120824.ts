export function solution(num_list: number[]) {
  const answer = [num_list.filter((v) => v % 2 === 0).length];
  answer.push(num_list.length - answer[0]);

  return answer;
}
