console.log("date is here");
//                  ON sar odor todorhoiloh 

let now = new Date();
console.log( now );

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);


// 2022 - 1969 = 53 * 12 = 636
let date = new Date("2017-01-26");
console.log(date);


let DEC31_2022 = new Date ("2022-12-31");
console.log(DEC31_2022)
let difference = DEC31_2022 - now
console.log(difference);

let time = new Date(difference);
console.log(time.getDate()+1);


