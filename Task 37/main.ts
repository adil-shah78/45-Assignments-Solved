// Making a Function
function make_Shirt (size: string = "Large", printMessage:string = "I Love TypeScript"){
    console.log(`Creating a ${size} shirt  with ${printMessage} prints on shirt `)
}

// Calling a function with by defualt values
make_Shirt();

// Calling a function now with medium size and defualt message
make_Shirt("Medium")

// Calling a function now with small size and also Defferent print Message 
make_Shirt("Small", "I Love JavaScript")