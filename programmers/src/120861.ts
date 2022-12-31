export function solution(keyinput: string[], board: number[]) {
    let x = 0
    let y = 0

    const maxX = (board[0] - 1) / 2;
    const maxY = (board[1] - 1) / 2;

    const ketMethod: { [key: string]: () => void} = {
        'right': () => {
            if (x !== maxX)
                x++
        },
        'left': () => {
            if (x !== -maxX)
                x--
        },
        'up': () => {
            if (y !== maxY)
                y++
        },
        'down': () => {
            if (y !== -maxY)
                y--
        }
    };

    keyinput.forEach(v => ketMethod[v]())
    
    return [x, y];
}