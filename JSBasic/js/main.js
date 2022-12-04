// 1. "Comments can make code readable"
// 2. "Javascript lesson begin"
/*3.
Comments can make 
code readable */

// 4. 5.
let a = 2;

let b = "2";

let c;

let d = null;

let e = true;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(d);
console.log(typeof(e));

// 6.
let number;
var numbers;

// 7.
let f = 123;
var g = 321;
//8.
let FirstName;
let LastName;
let MaritalStatus;
let Country;
let Age;
//9.
let firstName, lastName, maritalStatus, country, age;
//10. P = a + b + c;

let P = 2;
let O = 3;
let R = 4;

console.log(P + O + R);
//11. A = p * r^2;
const PI = 3.14;
let r = 5;

console.log(PI * Math.pow(r, 2));
//12.m = y^2 - y^1 / x^2 - x^1;
let y = 2;
let x = 3;

let m = ((Math.pow(y, 2) - Math.pow(y, 1)) / (Math.pow(x, 2) - (Math.pow(x, 1))));
console.log(m);
//13. 
const bits = 8_000_000_000;
let G = 15;
let Geg = bits * G;
console.log(Geg);
//14. 
let bit = 0.000_000_125;
let MB = 15;
let sec = bit * MB;
console.log(sec);
//15. s = (a + b + c) / 2; 
// ^s (s - a) * (s - b) * (s - c) ;
let side1 = 5; 
let side2 = 6;
let side3 = 10;

let s = (side1 + side2 + side3) / 2;
console.log(s);

let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
console.log(area);

//16. F = (C * (9 / 5) + 32);

let C = 38;
let F = (C * (9 / 5) + 32);
console.log(F);
//17. C0 = [(F0 - 32) * 5] / 9;
let F0 = 30;
let C0 = ((F0 - 32) * 5) / 9;
console.log(C0);
//18.
console.log("18 dasgal ehleh");
let lucky = 20;
let unlucky = 11;
let nemeh = lucky + unlucky;
let hasah = lucky - unlucky;
let huwaah = Math.round(lucky / unlucky);
let urjih = lucky * unlucky;
let uldegdel = lucky % unlucky; 
console.log(nemeh, hasah, huwaah, urjih, uldegdel);
console.log("18dasgal togsoh");
//19. 
let cm = 10; 
let inch = 10 * 2.54;
console.log(inch);
//20. A = PI * r^2;
// d = 2 * r;
// let circled = Number(prompt("Duriin radius ognuu"));
// alert(2 * circled);
// let circlea = Number(prompt("Duriin radius ognuu"));
// alert(PI * (Math.pow(circlea, 2)));
//21. 
// let ab = prompt("utga ognuu");
// console.log(ab.charAt(0));
//22.
let baby = "Baby shark, ";
let doo = "doo-doo, doo-doo";
let mommy = "Mommy shark, ";
let daddy = "Daddy Shark, ";
let grandpa = "Grandpa Shark, ";
console.log(baby + doo)
console.log(baby + doo)
console.log(baby + doo)
console.log(baby);
console.log(mommy + doo)
console.log(mommy + doo)
console.log(mommy + doo)
console.log(mommy)
console.log(daddy + doo)
console.log(daddy + doo)
console.log(daddy + doo)
console.log(daddy)
console.log(grandpa + doo)
console.log(grandpa + doo)
console.log(grandpa + doo)
console.log(grandpa );