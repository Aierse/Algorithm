export function solution(myString: string) {
    return myString.split("x").map((v) => v.length);
}
