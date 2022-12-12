// let a = "hi";
// let b = "hi";
// console.log(a < b);

// console.log(a == b);

// console.log(a === b);

// let c = 10;
// let d = "10";
// console.log(c == d);
// console.log(c === d);
// console.log(c !== d);


// let e = true;
// let f = false;

// console.log(e < f);
// console.log(e > f);
//                  <== TERNARY ==>

// let result = 10;
// if (result > 10) {
//     console.log("more than 10");
// } else {
//     console.log("less then 10")
// }

// result > 10 ? (result < 11 ? console.log("test") : console.log("hi")): console.log("less than 10");

//                                      <== TIP ==> DAALGAVAR

// const tip1 = 3000;
// const tip2 = 27500;
// const tip3 = 100000;

// let tipResult1 = (5000 >= tip1 && 30000 <= tip1) ? tip1 * 0.15 + tip1: tip1 * 0.2 + tip1;
// console.log(tipResult1);
// const input = prompt ("Give me your money");
// const numberInput = Number(input);


// let exTipResult = (5000 <= tip2 && 30000 >= tip2) ? tip2 * 0.15 + tip2: tip2 * 0.2 + tip2;
// alert(exTipResult);


//                                  onts dumd is bad in his lessons
// const studentPoint = Number(prompt("Give me your score"));
// const studentName = prompt("Give me your student name");

// let studentResult = "Mash muu";

// if (studentPoint <= 60 ) {
//     alert(studentResult)
// }
// if (studentPoint >= 60 && 70 > studentPoint) {
//     alert(studentResult = "hangalttai")
// }
// if (studentPoint >= 70 && 80 > studentPoint) {
//     alert(studentResult = "dund")
// }
// if (studentPoint >= 80 && 90 > studentPoint) {
//     alert(studentResult = "sain")
// }
// if (studentPoint >= 90 && 100 > studentPoint) {
//     alert(studentResult = "mash sain")
// }
// else {
//     studentResult = "onoo dandaa 100-aas doosh baih ystoi";
// }
// alert(studentName + " - " + studentPoint + " - " + studentResult);
// console.log(`${studentName} - ${studentPoint} - ${studentResult}`);

//                              \n\n ==> new line 

// alert("Lorem Ipsum \"is simply dummy text\" of the printing and typesetting industry. \n\n \t Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")


//                              .lenght --- urt oloh 

// console.log("its log");
// console.error("its is error");

// const str = "Life, the universe and everything.";
// console.log(str.length);

// const registerNumber = prompt("register number");

// if (registerNumber.length != 10) {
//     alert("buruu bn" ,);
// }
// else {
//     alert("mun")
// }




// console.log(registerNumber.substr(0 , 10));


//   .charAt(index = 0) str[index]

// console.log(str.charAt (0) );
// console.log(str [1] );

// console.log(registerNumber.charAt(0));
// console.log(registerNumber [2]);


//                      str.toUpperCase         str.toLowerCase


// console.log(str.toUpperCase () );
// console.log(str.toLowerCase () );

// let firstName = "John";
// let fullName = firstName.concat(" " , "Smith");

// console.log(fullName);
// console.log(firstName);


// let str = "JavaScript String";

// console.log(str.substr(0, 10));
// console.log(str.substr(11 , 6));

// console.log(Number("abc"));
// console.log(Number.isInteger("abc"));
// console.log(Number("12345678"));
// console.log(Number.isInteger(Number("12345678")));

// exercise: 


//                                      registor shalgah
// const registerNumber = prompt("register number");
// const registerChar = registerNumber.substr(0 , 2);
// console.log(registerChar)
// const registerNum = registerNumber.substr(2 , 9);
// console.log(registerNum)

// if (registerNumber.length != 10) {
//     alert("mun" ,);
// }
// else {
//     alert("buruu")
// }

// if (!Number.isInteger(Number(registerNumber)) && Number.isInteger(Number(registerNum)) && registerNumber.length == 10) {
//     console.log("correct")
// }   else {
//     console.log("wrong")
// }

//                                  <== JS Number -validate phone number ==>


const phoneNumber = prompt("utasnii dugaaraa oruulnuu");
const phoneNum = phoneNumber.substr(0 , 1);
const phoneNum1 = phoneNumber.substr(1 , 3);

console.log(phoneNum)
console.log(phoneNum1)

if (Number.isInteger(Number(phoneNumber)) &&  phoneNumber.length == 12 && phoneNum1 == 976 ) {
    console.log("correct")
} else {
    console.log("wrong")
}