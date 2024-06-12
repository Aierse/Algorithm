export function solution(arr: number[], queries: number[][]) {
  const result: number[] = []

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]

    const targets = arr
      .slice(query[0], query[1] + 1)
      .filter((v) => query[2] < v)

    result.push(targets.length ? Math.min(...targets) : -1)
  }

  return result
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
)
