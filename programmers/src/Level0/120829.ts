export function solution(angle: number) {
  return angle <= 90 ? (angle === 90 ? 2 : 1) : angle === 180 ? 4 : 3;
}
