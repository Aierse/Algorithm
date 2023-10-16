export function solution(str: string) {
  str = str.replace(/[A-z]/gi, (string) => {
    if (string === string.toUpperCase()) return string.toLowerCase();
    else return string.toUpperCase();
  });

  console.log(str);
}
