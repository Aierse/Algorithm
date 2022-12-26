export function solution(price: number) {
    const discount: {
        price: number,
        rate: number,
    }[] = [
        {
            price: 500000,
            rate: 0.8,
        },
        {
            price: 300000,
            rate: 0.9,
        },
        {
            price: 100000,
            rate: 0.95,
        },
        {
            price: 0,
            rate: 1,
        },
    ]
    
    return Math.floor(price * discount.find(v => v.price <= price)!.rate)
}
