export function solution(my_string: string, index_list: number[]) {
    return index_list.map((v) => my_string[v]).join('');
}(
