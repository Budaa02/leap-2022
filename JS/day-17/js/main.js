// function pow (number, exponent) {
//     let multiply = 1;
//     for (let i = 1; i <= exponent; i++) {
//         multiply = multiply * number;
//     }
//     return multiply;
// }
// let result = pow (2, 3);

// console.log(result);
// console.log(pow(2, 4));
// console.log(pow(5, 2));
// console.log(Math.pow(4, 3));
// console.log(pow(4, 3));

//                              1...
// function findMin (x, y){
//     if (x < y){
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(findMin(4, 3));


// //                          2...
// function printArray(array) {
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i])
//     }
// }

// let myArray = [100,200 ,3 ,4 ,10]
// // printArray(myArray);
// //                          3...
// let findArrayMax = function (max) {
//     let min = -1; 
//     for (let I = 0; I < max.length; I++ ) {
//         if (min <= max[I] )
//         min = max [I]
//     }
//     return min;
// }

// console.log(findArrayMax(myArray))


//                              4....
// console.log("Ex 04 begins");

// let findArrayAverage = (arr) => {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     const average = sum / arr.length;
//     // i need average
//     return average;
// }

// let my = [2, 2, 2, 2, 6]
// console.log(findArrayAverage(my))

//                             5....


//              array at function
// function findAt ()

// const array1 = [1, 2, 3, 4, 5];
// console.log(findAt(array1, 0));
// console.log(findAt(array4, 0));

// console.log(array1.at(0));
// console.log(array1.at(2));


//      concat arr1 = [1, 2, 3]arr2 = [4, 5, 6] => [1, 2, 3, 4, 5, 6]
// function arrConcat (arr1, arr2) {

//     let concatedArray = []
//     //arr. push()
//     for(let i = 0; i < arr2.length; i++) {
//         concatedArray.push(arr2[i])
//     }
//     for(let i = 0; i < arr1.length; i++) {
//         concatedArray.push(arr1[i])
//     }
//     return concatedArray;
// }

// let arrayC1 = [1, 2, 3]
// let arrayC2 = [4, 5, 6]
// console.log(arrConcat(arrayC1, arrayC2));
// console.log(arrConcat(arrayC2, arrayC1));

// //array concat method
// console.log("array concat method")
// console.log(arrayC1.concat(arrayC2));
// console.log(arrayC1 + arrayC2);

// // arr1 = [1, 2, 3] arr2 = [4, 5, 6] => arr3 = [5, 7 , 9]
// //finding out sum of array elements
// function arrayElementAdd (arr1, arr2) {
//     let sum = []
//     for (let i = 0; i < arr1.length; i++){
//         sum[i] = arr1[i] + arr2[i];
//     }
//     return sum;
// }
// console.log(arrayElementAdd(arrayC1, arrayC2))

//  array includes
// console.log("array includes")
// //  arr1 = [2, 4, 5] => 5 -> true, 2 => true, 3 => false

// let arrayIncludes = function (arr, number) {
//     let found = false; 
//     for(let i = 0; i < arr.length; i++) {
//         if(number === arr[i]){
//             found = true;
//             break;
//         }
//     }
//     return found;
// }
// const arrayInc = [2, 4, 5]
// console.log(arrayIncludes(arrayInc, 2)); // true
// console.log(arrayIncludes(arrayInc, 5)); // true
// console.log(arrayIncludes(arrayInc, 3)); // false

// // array implicit function includes

// console.log(arrayInc.includes(2));
// console.log(arrayInc.includes(5));
// console.log(arrayInc.includes(3));

// // arr1 = [1, 2, 3] => 3 index ? => 2

// let findIndex = function (arr, number) {
//     let index = -1;
//     for(let i = 0; i < arr.length; i++){
//         if (number === arr[i]) {
//             index = i;
//         }
//     }
//     return index;
// }
// const arrIndex = [1, 2, 3]
// console.log(findIndex(arrIndex, 3)); // => 2
// console.log(findIndex(arrIndex, 2)); // => 1
// console.log(findIndex(arrIndex, 10)); // => -1
// console.log("now it is time to test indexof method of array");
// console.log(arrIndex.indexOf(3)) // => 2
// console.log(arrIndex.indexOf(2)) // => 1
// console.log(arrIndex.indexOf(10)) // => -1

// const animals = ["chono", "buhun", "temee", "nugas", "buhun"];
// console.log(animals.indexOf("buhun")); // => 1
// console.log(animals.indexOf("buhun", 2)); // => 4
// console.log(animals.indexOf("giraffe")); // => -1

// //                          Join 
// console.log("Join me function");

// //arr1 = [1, 2 ,3 => 123]

// let funcJoin = (arr, symbol) => {
//     let output = "";

//     for(let i = 0; i < arr.length; i++) {
//         if(i == arr.length - 1){
//             symbol = ""
//         }
//         output = output + arr[i] + symbol;
//     }
//     return output;
// }
// const arrayJoin = [1, 2, 3]
// console.log(funcJoin(arrayJoin, "+"))  // => 123

// console.log("array join method");

// const jiguurten = ["Elee", "Heree", "Galuu"];
// console.log(jiguurten.join()); // "Elee,Heree,Galuu"
// console.log(jiguurten.join("")) // "EleeHereeGaluu"
// console.log(jiguurten.join("-")) // "Elee-Heree-Galuu"


//      arr1 = [1, 2, 3] => pop => [1, 2]
console.log("pop array function")
let popFunc = (arr) => {
    const lastIndex = arr.length - 1;
    let poppedArray = []

    for(let i = 0; i < arr.length; i++){
        if(i != lastIndex) {
            poppedArray.push(arr[i]);
        }
    }
    return poppedArray;
}
const popArray = [1, 2, 3]
console.log(popFunc(popArray)) // [1, 2]
console.log(popFunc([12, 4, 3, 5, 6])) // [12, 4, 3, 5]

console.log("pop array method")
const popArrayResult = [3, 4, 5, 6, 7];
popArrayResult.pop()
console.log(popArrayResult);