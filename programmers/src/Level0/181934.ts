const operations: { [key: string]: Function } = {
  ">=": (n: number, m: number) => n >= m,
  "<=": (n: number, m: number) => n <= m,
  ">!": (n: number, m: number) => n > m,
  "<!": (n: number, m: number) => n < m,
};

export function solution(ineq: string, eq: string, n: number, m: number) {
  return +operations[ineq + eq](n, m);
}
