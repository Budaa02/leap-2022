console.log("Exercises")



console.log(document.getElementById("aimag-101").innerHTML)
console.log(document.getElementById("aimag-522").innerHTML)
console.log(document.getElementById("aimag-315").innerHTML)

document.getElementById("aimagNames").style = "font-size: 40px; border: 10px solid black; margin:0; padding:50px; border-radius:10px"
document.getElementById("aimag-410").style = "padding: 10px; margin-left:30px; font-size:100px"

console.log(document.getElementById("aimagNames"))

console.log(document.getElementById("aimagNames").id);
const liLength = document.getElementById("aimagNames").getElementsByTagName("li").length;
console.log(document.getElementById("aimagNames").getElementsByTagName("li")[liLength -1].innerHTML);


console.log(document.getElementsByTagName("span")[0].innerHTML = "Hello world!!!!")

for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-1")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color:aqua; padding:10px"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-2")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color:orange;padding:10px"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-3")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color:pink;padding:10px"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-4")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color:red;padding:10px"
    }
}
for(let i = 0; i < document.getElementById("aimagNames").getElementsByTagName("li").length; i++){
    if(document.getElementById("aimagNames").getElementsByTagName("li")[i].id.includes("aimag-5")){
        document.getElementById("aimagNames").getElementsByTagName("li")[i].style = "background-color:aqua;padding:10px"
    }
}
console.log(document.querySelector("#aimagNames"));
console.log(document.querySelector(".hangai"));

console.log(document.getElementsByClassName("hangai"));
console.log(document.querySelectorAll(".hangai"));
console.log(document.querySelector("#demo").innerHTML = "Date : " + Date());



document.querySelector("img").src = "./img/dota3.jpeg"

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const main = document.getElementsByTagName("body");
const h1 = document.querySelector("h1");
h1.appendChild(newDiv);



