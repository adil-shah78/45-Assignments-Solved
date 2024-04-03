// Making a Function
function make_Shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt  with ").concat(printMessage, " prints on shirt "));
}
// Calling a function with by defualt values
make_Shirt();
// Calling a function now with medium size and defualt message
make_Shirt("Medium");
// Calling a function now with small size and also Defferent print Message 
make_Shirt("Small", "I Love JavaScript");
