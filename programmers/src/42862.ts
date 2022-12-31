export function solution(n: number, lost: number[], reserve: number[]) {
    let filteringLost = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b)
    let filteringReserve = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b)

    n -= filteringLost.length

    for (const i of filteringLost) {
        const preSearch = filteringReserve.findIndex(v => v === i - 1)

        if (preSearch !== -1) {
            n++
            filteringReserve.splice(preSearch, 1)
        } else {
            const postSearch = filteringReserve.findIndex(v => v === i + 1)

            if (postSearch !== -1) {
                n++
                filteringReserve.splice(postSearch, 1)
            }
        }
    }

    return n
}
