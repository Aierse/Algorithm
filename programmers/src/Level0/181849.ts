export function solution(num_str: string) {
    return [...num_str].reduce((a, c) => a + +c, 0);
}
