// Array as a perameter
function mysandwiches(...item: string[]){
    return ` I want Sandwiche of ${item}`;
};
let collection1 = mysandwiches("Ham ","Chees","Lettuce");
// can add as many you wish 

let collection2 = mysandwiches("Turkey","Swiss");
let collection3 = mysandwiches();
// without arrgument

console.log(collection1);
console.log(collection2);
console.log(collection3);
