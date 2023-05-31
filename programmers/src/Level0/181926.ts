export function solution(n: number, control: string) {
    return n
        + (control.match(/w/g) || []).length
        + (control.match(/d/g) || []).length * 10
        - (control.match(/s/g) || []).length
        - (control.match(/a/g) || []).length * 10;
}
