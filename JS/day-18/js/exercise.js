// EX 01 JS Methods 

// const shoppingCard = ["Milk", "Cofee", "Tea", "Honey"];

// if (!shoppingCard.includes("Meat")) {
//     shoppingCard.unshift("Meat")
//     console.log(shoppingCard)
// }

// if (!shoppingCard.includes("Sugar")) {
//     shoppingCard.push("Sugar")
// } console.log(shoppingCard)
// if (shoppingCard.includes("Honey")) {
//     let index = shoppingCard.indexOf("Honey")
//     shoppingCard.splice(index,1)
//     console.log(shoppingCard)
// }
// if (shoppingCard.includes("Tea")) {
//     let index = shoppingCard.indexOf("Tea")
//     shoppingCard.splice(index, 1 ,"Green Tea")
    
// }

// console.log(shoppingCard)

// EX 02 JS Methods

let array = ["facebook" , "google" , "microsoft" , "apple" , "ibm" , "oracle" , "amazon"  , "oracle", "oracle"  ];
let array1 = ["facebook" , "google" , "microsoft" , "apple" , "ibm" , "oracle" , "amazon"];

console.log(array)


console.log(array.sort())
console.log(array1.reverse())

array.shift(0);
console.log(array);
console.log(array)

if (array.length % 2 == 0 ) {
    array.splice(array.length / 2 - 1 , 2)
    console.log(array)
} else {
    array.splice(array.length / 2 - 0.5, 1)
    console.log(array)
}

