export function solution(myString: string) {
    return [...myString].map((v) => v < "l" ? "l" : v).join("");
}
