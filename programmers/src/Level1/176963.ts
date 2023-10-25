export function solution(name: string[], yearning: number[], photo: string[][]) {
  const selector: { [key: string]: number } = {};

  name.forEach((v, i) => {
    selector[v] = yearning[i];
  });

  return photo.map((picture) => {
    return picture.map((v) => selector[v] || 0).reduce((a, c) => a + c);
  });
}
