function solution(my_string: string) {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const answer: { [key: string]: number } = {};

  for (const char of alpha) {
    answer[char] = 0;
  }

  for (const char of my_string) {
    answer[char]++;
  }

  return Object.values(answer);
}
