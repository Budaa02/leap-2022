console.log("My function");

// function declaration - funktsiig todorhoiloh
function f() {
    console.log("Hello functions");
}

// function call - punltsiig duudah  - f()

/**
 * f(x) = x * x => x is parameter buyu punktsiin gadnaas avdag huvisagch
 */
function f1(x, y) {
    console.log(Math.pow(x, 2) + Math.pow(y, 2));
}
function f2(x, y) {
    console.log(Math.pow(x, 2) + (2 * x * y) + Math.pow(y, 2));
}
function f3(m, c) {
    console.log(m * (Math.pow(c, 2)));
}
function f4(x, y) {
    console.log(Math.cos(x) - Math.sin(y));
}
function f5(x) {
    console.log(Math.pow(x, 3) + Math.pow(x, 2) + 5 * x + 12);
}
function f6(x) {
    console.log(Math.pow(x, 2));
}
// function f7 (x) {
//     console.log((x - 1) + (x - 2));
// }
function f8 (x) {
    console.log(Math.sqrt(x));
}
// 4. f(x) = x!
function factorial (x) {
    let multiplication = 1;
    for (let i = 1; i <= x; i++){
        multiplication = multiplication * i;
    }
    console.log(multiplication)
}
// function E(m, c) {
//     console.log(m * Math.pow(c, 2));
// }
const c = 300_000;
f1(931_321, 123_123)
f2(2, 2)
f3(78, c)
f4(0, 0)
f5(5)
f6(5)
f8(121)
// f7(100_000_000_000)
f8(100_000_123_123_123)
factorial(4)