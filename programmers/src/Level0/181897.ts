export function solution(n: number, slicer: number[], num_list: number[]) {
  const selector: { [key: number]: Function } = {
    1: (a: number, b: number) => {
      a = 0;
      return num_list.slice(0, b + 1);
    },
    2: (a: number) => {
      return num_list.slice(a);
    },
    3: (a: number, b: number) => {
      return num_list.slice(a, b + 1);
    },
    4: (a: number, b: number, c: number) => {
      return num_list.slice(a, b + 1).filter((v, i) => i % c === 0);
    },
  };

  return selector[n](...slicer);
}
