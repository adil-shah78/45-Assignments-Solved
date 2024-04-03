// Array Current Users
let current_Users = ["Adil","gohar","Waseem","Shan","Nadeem"];

// Array Of New Users
let New_User = ["Hamza","Ayesha","Gohar","Mahad","Adil"];

// Loop through new_Users to check for username avaibility
New_User.forEach(new_one_user => {

    // Making a Condition for username already exist and save in our_condition variable 
  let Our_condition = current_Users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
// Print Different message using if-Else statments
  if(Our_condition){
        console.log(`soory ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})