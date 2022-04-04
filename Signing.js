//Initiallize a users array.
users = [];
var check = document.getElementById("Register");
//The logic when the Register button was entered.
check.onclick = function() {
    var password = document.getElementById("Password").value;
    var photo = document.getElementById("Photo").value.toString();
    if(isPasswordValid(password) && isPasswordValidLength(password) && isFileImage(photo)) {
    //Push a new user to the array.
    let user = {
        "Username" : document.getElementById("Username").value,
        "Password" : password,
        "Verifypassword" : document.getElementById("Verifypassword").value,
        "Displayname" : document.getElementById("Displayname").value,
        "Photo" : photo
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
            alert("Your password must be at least 8 characters! please try again.");
            return false;     
        }
        if(password.length > 20) {
            alert("Your password must be maximum 20 characters! please try again.");
            return false;  
        }
        return true;
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
        alert("Your password must contain at least 1 number and 1 letter! please try again.")
        return false;    
    }
    
    //Function to check whether a file is an image or not.
    function isFileImage(file) {
        let index = file.lastIndexOf(".") + 1;
        let fileType = file.substring(index, file.length).toUpperCase();
        if(fileType == "JPEG" || fileType == "JPG" || fileType == "PNG") {
            return true;
        }
        alert("You have just inserted a file which is not an image! please try again.");
        return false;
        }