let guestList = ["Adil","Gohar","Shan","Waseem"];

let dontCome = guestList[0];

console.log(dontCome, "nai ahh skta");

guestList.splice(0, 1, "Nadeem");

guestList.forEach(guest => console.log(`salam ${guest}, would u like to Dinner with me?`));