// Creating a Guest List Array
let guestList = ["Adil","Gohar","Shan","Waseem"];

// Making veriable for those guest who cant come
let dontCome = guestList[0];

//printing the name of guest who cant come
console.log(dontCome, "Naii Ahh Sakty Hain");

// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Nadeem");

// message Print for Bigger Table 
console.log("Good newz ! we have Found a Bigger Table For Dinner,");

// Adding a new guest at starting index of array
guestList.unshift("Rehman");

// Adding a new guest at ending index of array 
guestList.push("zain");

// Getba middle index of our guest List array
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");

// print Message of Updated List
console.log("Updated List of our Guests");

// Sedding aa invitation message to our guests one by one with thier names 
guestList.forEach(oneguest => console.log(`salam ${oneguest}, Would You Like To Dinner With Me `));




