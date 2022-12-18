
// const registerNumber = prompt("register number");

// if (registerNumber.length != 10) {
//     alert("buruu bn" ,);
// }
// else {
//     alert("mun")
//     if (registerNumber.substr(0,2) = str[index]){
//         console.log(registerNumber.substr(0, 2))
//     }
// }




// console.log(registerNumber.substr(0 , 10));


// //   .charAt(index = 0) str[index]

// // console.log(str.charAt (0) );
// console.log(str [1] );

// console.log(registerNumber.charAt(0));
// console.log(registerNumber [2]);







const registerNumber = prompt("register number");
const registerChar = registerNumber.substr(0 , 2);
console.log(registerChar)
const registerNum = registerNumber.substr(2 , 9);
console.log(registerNum)

if (registerNumber.length != 10) {
    alert("buruu" ,);
}
else {
    alert("mun")
}

if (!Number.isInteger(Number(registerNumber)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
    console.log("correct")
}   else {
    console.log("wrong")
}




