// Given number of arrays = 1, 2, 5, 3, 5, 6, 7, 8
// let's find out which numbers are even
// if the number is even, then print out the number
// you have to use FOR loop

let numbers = [1, 2, 5, 3, 5, 6, 7, 10]
// for(let i = 0 ; i < numbers.length ; i++) {
//     // console.log(numbers[i])
//     if (numbers[i] % 2 == 0){
//         console.log(numbers[i])
//     }
// }

// Given number of arrays = 1, 2, 5, 3, 5, 6, 7, 8
// output new arrays = 2, 3, 6 ,4 ,6 , 7 , 8 , 9 
// Array item value change

console.log(numbers);

numbers[3] = 6;

console.log(numbers);

let playerNames = ["salah", "mane", "becker", "diaz"];

console.log(playerNames);
playerNames[1] = "khangai";
console.log(playerNames);


let arrays = [1, 2, 5, 3, 5, 6, 7, 8];
console.log(arrays)
for (let i = 0; i < arrays.length; i++) {
    arrays[i] = arrays[i] + 1 ;
}

console.log(arrays)