const studentPoint = Number(prompt("Give me your score"));
const studentName = prompt("Give me your student name");

let studentResult = "Mash muu";

if (studentPoint <= 60 ) {
    alert(studentResult)
}
if (studentPoint >= 60 && 70 > studentPoint) {
    alert(studentResult = "hangalttai")
}
if (studentPoint >= 70 && 80 > studentPoint) {
    alert(studentResult = "dund")
}
if (studentPoint >= 80 && 90 > studentPoint) {
    alert(studentResult = "sain")
}
if (studentPoint >= 90 && 100 > studentPoint) {
    alert(studentResult = "mash sain")
}
else {
    studentResult = "onoo dandaa 100-aas doosh baih ystoi";
}
alert(studentName + " - " + studentPoint + " - " + studentResult);
console.log(`${studentName} - ${studentPoint} - ${studentResult}`);