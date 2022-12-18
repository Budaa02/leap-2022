console.log("day-22")


function add (x, y) {
    return x + y;
}

function print (f) {
    let x = 3 , y = 2; 
    console.log(f(x, y));
}


print(add);

// setTimeout




let x = () => {

    console.log("arrow function")
}



setTimeout (x, 1000)

