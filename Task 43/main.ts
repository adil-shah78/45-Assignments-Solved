// Define the function to show magicians Names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

// function to make magicians great through .map()it will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names 
let magicians_names = ["Harry poter","Hamza","Usman"];

//  Making aa copy of orginal array through .slice() function
let copy_magician_names = magicians_names.slice()

// MOdify the copied array to include "The great" with thier names 
let  copy_great_magicians = make_great(copy_magician_names);

// Show both arrays Orginal and copied

// Orginal
console.log("Orginal Array\n")
show_magicians(magicians_names);

// Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians);


