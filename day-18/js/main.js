// let sortArray = [1, 2, 8, 7, -2, 10, ]

// function sortingAlgorithm(arr) {
//     for (let i = 0; i < arr.length - 1; i++){
//         let indexMin = i;
//         for(let j = i + 1; j < arr.length - 1; j++) {
//             if (arr[j] < arr[indexMin]) {
//                 indexMin = j;
//             }
//         }
//         temp = arr[i]
//         arr[i] = arr[indexMin];
//         arr[indexMin] = temp;
//     }
//     return arr;
// }
// console.log(sortingAlgorithm (sortArray))


// console.log("array sorting");
// const names = ["Marlaa", "Javkhaa", "Javklan", "Dorj"];
// names.sort();
// console.log(names);

// console.log("array reverse")
// function arrayReverse(arr) {
//     let tempArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         tempArray.push(arr[i]);
//     }
//     return tempArray;
// }

// let arrReverse  = [4, 5, 1, 8]
// console.log(arrayReverse(arrReverse)); // [8, 1,5 ,4]


// const numbers = ["one", "two", "three"];
// console.log("array1:", numbers);
// const reversed = numbers.reverse();
// console.log("reversed", reversed);


const nameSlice = ["bat", "dorj", "purev", "davaa", "tomor"];
console.log(nameSlice.slice(3));
console.log(nameSlice);


function nameSliceFunc (arr, index) {
    // let tempArray = []
    // for (let i = index; i < arr.length; i++) {
    //     tempArray.push(arr[i]);
    // }
    // return tempArray;
    for(let i = 0; i < index; i++){
        arr.shift()
    }
    return arr;
}


console.log(nameSliceFunc([1, 2, 3, 5, 5, 6, 7], 2)) // [3, 4, 5]

const spliceNames = ["Davaa", "Lkhagva", "Purev","Byamba"];
spliceNames.splice(1, 0, "Myagmar");
// 1 dex index deer shineer utga nemeh uildel
console.log(spliceNames);
spliceNames.splice(4,0, "friday" )
console.log(spliceNames);
