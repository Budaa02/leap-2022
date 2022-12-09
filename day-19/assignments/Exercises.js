// console.log("Object exercises")

// //                                      JS Object == Animals                              

// function howDoesTheFoxSay(array, animalType) {
//     for(let i = 0; i < array.length; i++) {
//         if (array[i].type == animalType) {
//             console.log(`${array[i].sound}-${array[i].sound}-${array[i].sound} ` )
//         }
//         // console.log(array[i].type);
        
//     }    
    
// }   


// let animals = [
//     {
//         type: "dog",
//         sound: "woof"
//     },
//     {
//         type: "cow",
//         sound: "moo"
//     },
//     {
//         type: "cat",
//         sound: "meow"
//     },
// ]





// console.log("DOG barking")
// howDoesTheFoxSay(animals, "dog"); // woof-woof-woof
// console.log("COW mooing")
// howDoesTheFoxSay(animals, "cow"); // moo-moo-moo
// console.log("CAT meowing")
// howDoesTheFoxSay(animals, "cat"); // meow-meow-meow


//                          JS Object == suragchid
function findOlderStudents(array){
    for (let i = 0; i < array.length; i++) {
        if (2022 - array[i].birthOfYear > 20) {
            let age = (2022 - array[i].birthOfYear)
            console.log(age)
        } else {
            console.log("nasand hureegui")
        }
        
    }
}
function findSingleStudents(type){
    
}


const students = [
    {
        name: "Khangai",
        birthOfYear: 1982,
        hobby: "karate",
        sinlge: false
    },
    {
        name: "Baigalaa",
        birthOfYear: 1999,
        hobby: "dance",
        sinlge: true
    },
    {
        name: "Dash-puntsag",
        birthOfYear: 2004,
        hobby: "chess",
        sinlge: false
    }
]

findOlderStudents(students) // Khangai, margad














