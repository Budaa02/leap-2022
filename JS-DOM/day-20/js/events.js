// console.log("events");

// // let myButton = document.getElementById("myButton");
// // console.log(myButton);
// let color = "green";
// function changeBackgroundColorGreen () {
//     myButton.style = "background-color: green"
// }
// function changeBackgroundColorWhite () {
//     myButton.style = "background-color: white"
// }

// function changeColors() {
//     console.log("clicked");
//     if(color === "green"){
//         myButton.style = `background-color: ${color}`;
//         color = "white"
//     } else {
//         myButton.style = `background-color: ${color}`;
//         color = "green";
//     }
// }
// // myButton.addEventListener("click", changeColors);


// let arrowFunc = () => {

// }

// myButton.addEventListener("click", () => {
//     myButton.style = "background-color: red;"
// })


// let registerButton = document.querySelector("#register");

// console.log(registerButton);
// registerButton.disabled = true;

let gegeerel = document.getElementById("gegeerel");
let color = "green"
function changeBackgroundColorGreen() {
    gegeerel.style = "background-color: green"
}
function changeBackgroundColorWhite() {
    gegeerel.style = "background-color: white"
}
// function changeColors() {
//     console.log("clicked");
//     if (color === "green") {
//         gegeerel.style = `background-color: ${color}`;
//         color = "white"
//     } else {
//         gegeerel.style = `background-color: ${color}`;
//         color = "green";
//     }
// }
// gegeerel.addEventListener("click", changeColors);
function changeBackgroundColor () {
    gegeerel.style = "background-color:red;"
    gegeerel.style = "background-color:green;"
}

gegeerel.addEventListener("click", changeBackgroundColor)






