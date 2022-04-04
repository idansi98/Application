//Initiallize a users array.
users = [];
var check = document.getElementById("Register");
//The logic when the Register button was entered.
check.onclick = function() {
    var password = document.getElementById("Password").value;
    if(isPasswordValid(password) && isPasswordValidLength(password)) {
    //Push a new user to the array.    
    let user = {
        "Username" : document.getElementById("Username").value,
        "Password" : password,
        "Verifypassword" : document.getElementById("Verifypassword").value,
        "Displayname" : document.getElementById("Displayname").value,
        "Photo" : document.getElementById("Photo").value
        }
        users.push(user);
        printArray(users);
    }
}


    function printArray(p) {
        for(let i = 0; i < p.length; i++) {
            console.log(p[i].Username);
        }
    }
    //Function to check whether a password's length is valid or not.
    function isPasswordValidLength(password) {
        if(password.length < 8) {
            console.log("Minimum length of password is 8 characters, please try again!");
            return false;        
        }
        if(password.length > 20) {
            console.log("Maximum length of password is 20 characters, please try again!");
            return false; 
        }
    }

    //Function to check whether a password is valid or not.
    function isPasswordValid(password) {
        var numChecker = false;
        var letterChecker = false;
        for(let i = 0; i < password.length; i++) {
            if(password[i].toUpperCase() != password[i].toLowerCase()) {
                letterChecker = true;
            }
            if(password[i] >= '0' && password[i] <= '9') {
                numChecker = true;
            }
        }
        if(numChecker && letterChecker) {
            return true;
        }
        return false;    
    }
    
