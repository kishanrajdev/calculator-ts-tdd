import * as readline from 'readline';
import { add } from "./calculator";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter input (press Ctrl+D to finish):');

let input = '';
rl.on('line', (line) => {
    input += line + '\n';
})

rl.on('close', () => {
    input = input.trim();
    console.log('sum: ' + add(input));
    rl.close();
});
