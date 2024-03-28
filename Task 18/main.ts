// Making a Array of Countriesand print its Orginal Order 
let countriesTovisit: string[] = ["China","Denmark","Brazil","Argentina",];
console.log("Orginal Order:", countriesTovisit);

// print the Array in Alphabetical Order without modifying the Actual Array List 
console.log("Alphabetical Order:", [...countriesTovisit].sort());

// show that the array is still in its orginal order 
console.log("Still in orginal order:", countriesTovisit);

// Print the array in Reversed Order without modifying the Actual array List
console.log("Reverse order:", [...countriesTovisit].reverse());

// show that the array is still in its orginal order 
console.log("Still in orginal order:", countriesTovisit);

// We havechanged the orginal Array Order now
console.log("Orginal Array Reversed:", countriesTovisit.reverse());

// Print the array to show that it's back to its orginal order 
console.log("Back to oeginal Order:", countriesTovisit.reverse());

// Printb the array to show that its order has been changed in Alphabetical Order Now
console.log("Sorted  in Alphabetical Order:",countriesTovisit.sort());

// We havechanged again the orginal Array Order now in reverse order Again
console.log("Orginal Array Reversed Again:", countriesTovisit.reverse());