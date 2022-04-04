var check = document.getElementById("Login");
check.onclick = function() {
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
    var index = doesUserExist(username);
    if(index == false) {
        alert("Username or Password is invalid!");
        return;
    }
    if(!isCorrectpassword(password, index)) {
        alert("Username or Password is invalid!");
        return;
    }
    window.location.assign("Chat.html");
}

function doesUserExist(username) {
    for(let i = 0; i < users.length; i++) {
        if(users[i].Username == username) {
            return i;
        }        
    }
    return false;
}

function isCorrectpassword(password, index) {
        if(users[index].password == password) {
            return true;
        }
}