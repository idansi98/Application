users = [];
var check = document.getElementById("Login");
check.onclick = function() {
    //"if(isPasswordValid(password) && password == passwordAgain)
        let user = {
            "Username" : getElementById("Username").value,
            "Password" : getElementById("Password").value,
            "Verifypassword" : getElementById("Verifypassword").value,
            "Displayname" : getElementById("Displayname").value,
            "Photo" : getElementById("Photo").value
        }
        users.push(user);
        console.login(users[0]);
    }

