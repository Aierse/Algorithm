export function solution(rsp: string) {
    const list: { [key: string]: string } = {
        '0': '5',
        '2': '0',
        '5': '2'
    }

    return [...rsp].map(v => list[v]).join('')
}