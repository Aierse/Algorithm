export function solution(arr: number[], delete_list: number[]) {
    return arr.filter((v) => !delete_list.includes(v));
}
