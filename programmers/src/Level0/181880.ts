export function solution(num_list: number[]) {
  let count = 0;

  num_list.forEach((v) => {
    while (v !== 1) {
      if (v % 2 !== 0) v -= 1;

      v /= 2;
      count++;
    }
  });

  return count;
}
