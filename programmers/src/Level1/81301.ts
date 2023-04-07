export function solution(s: string) {
  const list: { [key: string]: string } = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
  };

  const keys = Object.keys(list);

  for (const key of keys) {
    s = s.replace(new RegExp(key, "g"), list[key]);
  }
  return +s;
}
