// Array as a perameter
function mysandwiches() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    return " I want Sandwiche of ".concat(item);
}
;
var collection1 = mysandwiches("Ham ", "Chees", "Lettuce");
// can add as many you wish 
var collection2 = mysandwiches("Turkey", "Swiss");
var collection3 = mysandwiches();
// without arrgument
console.log(collection1);
console.log(collection2);
console.log(collection3);
