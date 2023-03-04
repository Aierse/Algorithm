export function solution(sizes: number[][]) {
    sizes.forEach((v, i) => {
        if (v[0] < v[1]) sizes[i] = [v[1], v[0]]
    })

    const area = sizes.reduce((acc, cur) => {
        if (acc[0] < cur[0]) acc[0] = cur[0]
        if (acc[1] < cur[1]) acc[1] = cur[1]

        return acc
    }, [0, 0])

    return area[0] * area[1]
}
