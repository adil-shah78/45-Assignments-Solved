var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Making a Array of Countriesand print its Orginal Order 
var countriesTovisit = ["China", "Denmark", "Brazil", "Argentina",];
console.log("Orginal Order:", countriesTovisit);
// print the Array in Alphabetical Order without modifying the Actual Array List 
console.log("Alphabetical Order:", __spreadArray([], countriesTovisit, true).sort());
// show that the array is still in its orginal order 
console.log("Still in orginal order:", countriesTovisit);
// Print the array in Reversed Order without modifying the Actual array List
console.log("Reverse order:", __spreadArray([], countriesTovisit, true).reverse());
// show that the array is still in its orginal order 
console.log("Still in orginal order:", countriesTovisit);
// We havechanged the orginal Array Order now
console.log("Orginal Array Reversed:", countriesTovisit.reverse());
// Print the array to show that it's back to its orginal order 
console.log("Back to oeginal Order:", countriesTovisit.reverse());
// Printb the array to show that its order has been changed in Alphabetical Order Now
console.log("Sorted  in Alphabetical Order:", countriesTovisit.sort());
// We havechanged again the orginal Array Order now in reverse order Again
console.log("Orginal Array Reversed Again:", countriesTovisit.reverse());
