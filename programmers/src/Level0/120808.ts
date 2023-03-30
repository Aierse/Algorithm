export function solution(denum1: number, num1: number, denum2: number, num2: number) {
  let top = num1 * denum2 + num2 * denum1;

  let bottom = num1 * num2;

  for (let i = bottom; i > 1; i--) {
    if (top % i === 0 && bottom % i === 0) {
      return [top / i, bottom / i];
    }
  }

  return [top, bottom];
}
