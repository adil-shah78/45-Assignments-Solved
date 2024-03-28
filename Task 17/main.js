// Creating a Guest List Array
var guestList = ["Adil", "Gohar", "Shan", "Waseem"];
// Making veriable for those guest who cant come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Osama");
// print Message of Updated List
console.log("Updated List of our Guests");
// Sedding aa invitation message to our guests one by one with thier names 
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", Would You Like To Dinner With Me ")); });
// infrom that only two guests can be invited for dinner
console.log("Unfortunately, the new Dinner table wont arrive on time, so i can only invite two Guests to Dinner with me ");
// Using while-loop to remove guests from the array until only two names remain
while (guestList.length > 2) {
    var removedguest = guestList.pop();
    console.log("sorry, ".concat(removedguest, " I cant invite you two dinner"));
}
// sending  a invitationt to the last two guest on the list
console.log("invitation two the last 2 guests");
guestList.forEach(function (Lasttwo) { return console.log("Luckly ".concat(Lasttwo, ", you are still invited to dinner")); });
// Removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty list:", guestList);
