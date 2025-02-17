import * as readline from 'readline';
import { add } from "./calculator";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter your input', (input) => {
    add(input);
    rl.close();
});
