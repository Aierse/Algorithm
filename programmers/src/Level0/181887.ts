export function solution(num_list: number[]) {
  const answer = {
    odd: 0,
    even: 0,
  };

  num_list.forEach((v, i) => {
    if (i % 2 === 0) answer.even += v;
    else answer.odd += v;
  });

  return answer.odd > answer.even ? answer.odd : answer.even;
}
