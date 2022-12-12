
// Daalgavar
// numbers[i] % 2 == 0

let numbers = [1, 4 ,5 ,6 ,8 ,10 , 3, 2, 10 , 9 ,8];
// console.log(numbers);

// for(let i = 0; i < numbers.length; i++) {
//     if(isEven(numbers[i])){
//         numbers[i] = numbers[i] + 4;
//     } else {
//         numbers[i] = numbers[i] - 5;
//     }
// }
// console.log(numbers)

function isEven(x) {
    // console.log("the number is" + x)
    if(x % 2 == 0) {
        // console.log("is is a even number");
        return true;
    } else {
        // console.log("it is an odd number");
        return false;
    }

    return 1;
}
console.log(isEven(numbers[0]))
console.log(isEven(numbers[1]))
console.log(isEven(numbers[2]))
console.log(isEven(numbers[3]))
console.log(isEven(numbers[4]))
console.log(isEven(numbers[5]))
console.log(isEven(numbers[6]))
console.log(isEven(numbers[7]))
console.log(isEven(numbers[8]))
// isEven(5);
// isEven(100);
// isEven(numbers[0])

// addTwoNumbers(x, y) = x + y

function addTwoNumbers(x, y) {
    x + y; 
    return x + y;
}
console.log(addTwoNumbers(10, 5));

function multiplyTwoNumbers(x, y) {
    x * y;
    return x * y;
}
console.log(multiplyTwoNumbers(2, 5));

function multiplyThreeNumbers (x, y, z) {
    const m = x * y * z;
    return m;
}
const result = multiplyThreeNumbers(4, 5, 6);
console.log(result);


for(let i = 0; i < numbers.length; i++) {
    if(isEven(numbers[i])){
        numbers[i] = numbers[i] + 4;
    } else {
        numbers[i] = numbers[i] - 5;
    }
}
console.log(numbers)