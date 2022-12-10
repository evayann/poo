export function remove<T>(element: T, from: T[]): T[] {
    return from.filter(el => el !== element);
}

export function range(from: number, to?: number): number[] {
    if (typeof to === 'undefined') 
        return [...Array(from).keys()]
    return [...Array(to - from).keys()].map(x => from + x);
} 
export function gen<T>(nb: number, generator: (i: number, nb: number) => T): T[] {
    return range(nb).map(i => generator(i, nb));
}