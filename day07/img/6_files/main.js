// alert 
// let x = 4;
// let y = 7;
// let z = 2, number = 240, numbers = 175; 

// alert(x * x + y * y - z * z * z / number * numbers);

// console.log (y % z)

// let a = 36, b = 19;
// console.log(a % b)

// let result = "30" - 10  // "" <== string
// console.log (result) // haruilt = 20;

// toirgiin urt oloh 
// toirgiin urt = 2 * p * r

// const p = 3.14;
// let r = 3, c = 2, q = 2, w = 3, h = 4; 
// console.log (2 * p * r);

// trapezoid area talbai oloh 
// A = (a + b) / 2 * h 
// console.log( (q + w) / c * h );


// prompt 
// NaN ==> NOT A NUMBER 

// let height = prompt("Please give me your height!!!")
// let bottom = prompt("Please give me your bottom!!!");
// let test = prompt("Please give me your test");
// let trapezoidArea = (bottom + test) / 2 * height;
// alert(trapezoidArea);



// if & else
// let a = 6;
// let b = 5;
// let a = prompt("duriin utga ognuu");
// let b = prompt("duriin too ognuu");

// if(a > b){
//     console.log("it is true");
// }
// else{
//     console.log("it is false");
// }

//                                      <== nas bodoh ==>
// (and = &&) ==> logical
// let yearOfBirth = prompt("Tursun onoo oruulnuu");
// let year = 2022;
// let old = (year - yearOfBirth);
// if (0 <= old && old <= 1) {
//     console.log("infant")
// }
// else if (1 < old && old <= 3) {
//     console.log("Toddler");
// }
// else if (3 < old && old <= 5) {
//     console.log("Preschool");
// }
// else if (5 < old && old <= 12) {
//     console.log("Gradeschooler");
// }
// else if (12 < old && old <= 18) {
//     console.log("Teen");
// }
// else if (18 < old && old <= 21) {
//     console.log("Young adult");
// }
// else if (21 < old ) {
//     console.log("Adult");
// }


//                                      <== JS Basic ==>
// 1. Comments can make code readable 
// 2. Javascript lesson begin
// 3. Comment
// can 
// make 
// code 
// readable 
//                                      <== Easy giin 6 dasgal ==>
// let a = prompt ("give me number");
// if (a % 2 == 0){
//     console.log("tegsh");
// }
// else {
//     console.log("sondgoi")
// }
//                                      <== Easy giin 5 dasgal ==>
// let a = prompt ("weight");
// let b = prompt ("height metr eer ognuu");
// if ( (a / (b * b) ) <18.5 ){
//     console.log("turanhai");
// }
// else if ((a / (b * b)) <=24.9 ){
//     console.log("heviin");
// }
// else if ((a / (b * b)) <=29.9 ){
//     console.log("iluudel");
// }
// else if ((a / (b * b)) <=34.9 ){
//     console.log("buduun");
// }
// else if ((a / (b * b)) <=35 ){
//     console.log("mash buduun");
// }
//                                      <== Easy giin 3 dasgal ==>
// let a = prompt("duriin too ugnuu");
// if (a / 3 == 3 || a / 7 ==7 ){
//     console.log("yes")
// }
// else {
//     console.log("no");
// }
//                                      <== Easy giin 2 dasgal ==>



//                                      <== Switch - case - break ==>
let day = prompt ("utgaa ognuu");
console.log(typeof(day));
let dayNumber = Number(day);
let dayName;
switch (dayNumber) {
    case 1:
        dayName = "monday";
        break;
    case 2:
        dayName = "tuesday";
        break;
    case 3:
        dayName = "wednesday";
        break;
    case 4:
        dayName = "thursday";
        break;
    case 5:
        dayName = "friday";
        break;
    case 6:
        dayName = "saturday";
        break;
    case 7:
        dayName = "sunday";
        break;
        default:
            dayName = "Invalid day im odor baihgui ee";
}
console.log(dayName);
