export function add (input: string): number {
    const inputArr = stringInputToArr(input);
    let total = 0;
    for (const num of inputArr) {
        total += num;
    }
    return total;
}

export function stringInputToArr(input: string): number[] {
    let delimiter = ','
    if (input.substring(0, 2) === '//') {
        const inputArr = input.split('\n');
        if (inputArr.length < 2) {
            throw new Error('invalid input');
        }
        const delimiterStr = inputArr[0];
        delimiter = delimiterStr.substring(2);
        input = inputArr.slice(1).join(delimiter);
    }
    input = input.replace(/\n/g, delimiter);
    return input.split(delimiter).map(input => {
        const inputTrimmed = input.trim();
        const num = inputTrimmed === "" ? 0 : parseInt(inputTrimmed);
        if(isNaN(num) || num < 0) {
           throw new Error('invalid input '+ input);
       }
       return num;
    });
}

