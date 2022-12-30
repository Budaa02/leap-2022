
let maxNum = Number(prompt("Give me number"));
let sum = ""; 

for (let i = 1; i <= maxNum; i++) {
    for (let o = 1; o < i; o++) {
        sum += o + " "; 
    }
    sum += i + "\n"
}
console.log(sum)

let sum1 = ""
for (let i = 1; i <= maxNum; i++) {
    for (let o = maxNum; o >= i; o--) {
        sum1 += o + " "; 
    }
    sum1 += "\n"
}
console.log(sum1)


// let maxNum = Number(prompt('Gime me number'));
// let pattern1 = "";
// for (let i = 1; i <= maxNum; i++) {
//     for (let j = 1; j < i; j++) {
//         pattern1 += j + ' ';
//     }
//     pattern1 += i + "\n";
// }
// console.log(pattern1);









