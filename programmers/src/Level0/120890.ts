export function solution(array: number[], n: number) {
  let min = {
    value: array[0],
    distance: Math.abs(array[0] - n),
  };

  for (let i = 1; i < array.length; i++) {
    const distance = Math.abs(array[i] - n);
    if (min.distance >= distance) {
      min = {
        value: min.distance === distance ? Math.min(array[i], min.value) : array[i],
        distance: distance,
      };
    }
  }

  return min.value;
}
