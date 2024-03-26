var guestList = ["Adil", "Gohar", "Shan", "Waseem"];
var dontCome = guestList[0];
console.log(dontCome, "nai ahh skta");
guestList.splice(0, 1, "Nadeem");
guestList.forEach(function (guest) { return console.log("salam ".concat(guest, ", would u like to Dinner with me?")); });
