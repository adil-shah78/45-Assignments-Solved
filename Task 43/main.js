// Define the function to show magicians Names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function to make magicians great through .map()it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
// Define an array of magicians names 
var magicians_names = ["Harry poter", "Hamza", "Usman"];
//  Making aa copy of orginal array through .slice() function
var copy_magician_names = magicians_names.slice();
// MOdify the copied array to include "The great" with thier names 
var copy_great_magicians = make_great(copy_magician_names);
// Show both arrays Orginal and copied
// Orginal
console.log("Orginal Array\n");
show_magicians(magicians_names);
// Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
