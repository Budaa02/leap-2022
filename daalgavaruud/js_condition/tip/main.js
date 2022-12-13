const tip1 = 3000;
const tip2 = 27500;
const tip3 = 100000;

if (5000 >= tip1 && 30000 <= tip1) {
    console.log('bodlogo bodoh 15%');
} else {
    console.log('busad bodoh 20%');
}

// let tipResult2 = (5000 >= tip2 && 30000 <= tip2) ? tip2 * 0.15 + tip2 : tip2 * 0.2 + tip2;
// console.log(tipResult2);

const input = prompt('Give me your money');
const numberInput = Number(input);
// const numberInputPrompt = Number(prompt('Give me your money'));

let exTipResult = (5000 <= numberInput && 30000 >= numberInput) ? numberInput * 0.15 + numberInput : numberInput * 0.2 + numberInput;
alert(exTipResult);