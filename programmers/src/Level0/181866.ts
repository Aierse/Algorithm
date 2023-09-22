export function solution(myString: string) {
    return myString.split("x").filter((v) => v).sort();
}
