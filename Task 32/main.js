// Array Current Users
var current_Users = ["Adil", "gohar", "Waseem", "Shan", "Nadeem"];
// Array Of New Users
var New_User = ["Hamza", "Ayesha", "Gohar", "Mahad", "Adil"];
// Loop through new_Users to check for username avaibility
New_User.forEach(function (new_one_user) {
    // Making a Condition for username already exist and save in our_condition variable 
    var Our_condition = current_Users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different message using if-Else statments
    if (Our_condition) {
        console.log("soory ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
