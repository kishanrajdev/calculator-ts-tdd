export function add (input: string): number {
    console.log('add - ', input.indexOf('\n'));
    return 2;
}

export function stringInputToArr(input: string): number[] {
    let delimiter = ','
    if (input.substring(0, 2) === '//') {
        const inputArr = input.split('\n');
        const delimiterStr = inputArr[0];
        delimiter = delimiterStr.substring(2);
        input = inputArr.slice(1).join(delimiter);
    }
    const output: number[] = input.split(delimiter).map(input => parseInt(input.trim()) || 0);
    return output;
}

