console.log("Day - 19: Object and Methods")

let teacherDolgor = {
    firstName: "Dolgor" , 
    lastName: "Dondog" ,
    age: 35 ,
    experience: 10,
    children: [],
    isMarried: true,
    address: {
        district: "BGD" , 
        khoroolol: "2-r" , 
        khoroo: "1-r", 
        houseNumber: "016",
        doorNumber: "4"
    } ,
    GPA: 94.5,

    introduction: function() {
        console.log(`Minii neriig ${this.lastName}-iin ${this.firstName} gedeg.
        Bi ${this.age} nastai. Bi ${this.experience}-iin ajliin turshlagatai.
        Bi ${this.address.district}-t amidardag.`)
    }
}

teacherDolgor.introduction()

let teacherDolgorClone = teacherDolgor;

teacherDolgorClone.firstName = "Dolgor Clone";

console.log(teacherDolgor.firstName);
console.log(teacherDolgorClone.firstName);

let teacherDolgorRealClone = {...teacherDolgor};
teacherDolgorRealClone.firstName = "Dolgor Real Clone";
console.log(teacherDolgorRealClone.firstName);
console.log(teacherDolgor.firstName);

console.log(Object.keys(teacherDolgor));
console.log(Object.values(teacherDolgor));

let newTeacher = Object.create({
    firstName: "Lastgame",
    lastName: "LastName"
})

console.log(newTeacher);

Object.assign({
    
}, newTeacher)
