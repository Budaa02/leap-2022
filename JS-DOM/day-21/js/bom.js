console.log("bom js");
console.log(window);
// window.alert("Hello");


// window.open("https://google.com", "Hello");

// window.confirm("Hello");

// let result = window.confirm("Do you wanna to Quit?");
// console.log(result);

// let result = confirm("Ta ustgahdaa itgeltei bainu uu?");

// let message = result ? "Ta OK towchiig darlaa":
// "ta Cancel tovchiig darsan "

// alert(message);


// let alertButton = document.getElementById("alertButton");
// let cancelButton = document.getElementById("cancelButton");
// let timeoutID;
// fucntion

// alertButton.addEventListener("click", () => {

//     console.log("alert button is clicked");
// } )


let counter = 0; 
let button = document.getElementById("Tsag_Ehelseen")
// button.setInterval(startInterval,1000)
button.addEventListener("click",runTimerInterval)

// setInterval(startInterval, 1000);
function runTimerInterval () {
    window.setInterval(startInterval,1000);

}

function startInterval() {
    let now = new Date();
    let myTimer = document.getElementById("myTimer");
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let d = now.getMilliseconds();
    myTimer.innerHTML = `${hour} : ${minute} : ${second}: ${d}`;
    // console.log(counter);
    // counter++;
}


