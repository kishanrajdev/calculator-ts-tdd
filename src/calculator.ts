export function add (input: string): number {
    return 2;
}

export function stringInputToArr(input: string): number[] {
    const output: number[] = input.split(',').map(input => parseInt(input.trim()) || 0);
    return output;
}

