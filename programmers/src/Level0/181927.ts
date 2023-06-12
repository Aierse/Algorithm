export function solution(num_list: number[]) {
    const last = num_list[num_list.length - 1];
    const beforeLast = num_list[num_list.length - 2];
    num_list.push(last > beforeLast ? last - beforeLast : last * 2);
    
    return num_list;
}
