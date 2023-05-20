export function solution(s: string) {
  return s
    .split(" ")
    .map((v) =>
      v
        .split("")
        .map((v, i) => {
          return i % 2 === 0 ? v.toUpperCase() : v.toLowerCase();
        })
        .join("")
    )
    .join(" ");
}
