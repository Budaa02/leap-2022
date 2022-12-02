// let count = 0;
// let a = prompt("utga ognuu");
// let sum = 0;

// while (count < a.length) {
//     sum = sum + Number(a.charAt(count));
//     console.log(a.charAt(count));
//     count = count + 1;

// }
// console.log(sum);


// for(sum = 0, rem = 0, N = Number(prompt("give a number")); N > 0; rem = N % 10,  sum = sum + rem, N = Math.floor(N/10) ) {
//     console.log(sum)
// }
// let sum = 0; 
// let rem = 0;
// let n = Number(prompt("give a number"));
// while(n > 0 ) {
//     rem = n % 10;
//     sum = sum + rem;
//     n = Math.floor(n / 10);
// }
// console.log(sum)

for (sum = 0, rem = 0, n = Number(prompt("give me number")); n > 0; rem = n % 10, sum = sum + rem, n = Math.floor(n / 10)) {
}
console.log(sum)



// let sum = 0, rem = 0, N = 0;

// N = Number(prompt("give me your number"))

// for( ; N > 0 ; ) {
//     rem = N % 10;
//     sum = sum + rem;
//     N = Math.floor(N / 10)
// }
// console.log(sum);