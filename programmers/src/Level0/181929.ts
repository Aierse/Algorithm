export function solution(num_list: number[]) {
  const answer: { [key: string]: number } = {
    mul: 1,
    add: 0,
  };

  num_list.forEach((v) => {
    answer.mul *= v;
    answer.add += v;
  });

  return +(answer.mul < answer.add ** 2);
}
