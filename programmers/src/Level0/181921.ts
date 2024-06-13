export function solution(l: number, r: number) {
  const result: number[] = []

  for (let i = l; i <= r; i++) {
    if (i % 10 !== 5 && i % 10 !== 0) continue

    if (/^[0,5]*$/.test(i.toString())) result.push(i)
  }

  return result.length ? result : [-1]
}

console.log(solution(5, 555))
console.log(solution(10, 20))
