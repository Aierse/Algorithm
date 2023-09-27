export function solution(my_string: string, is_suffix: string) {
    const targetIndex = my_string.lastIndexOf(is_suffix);
    return +(my_string.slice(targetIndex) === is_suffix);
}
