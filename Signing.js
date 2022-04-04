users = [];
var check = document.getElementById("Register");
check.onclick = function() {
    //"if(isPasswordValid(password) && password == passwordAgain)
        let user = {
            "Username" : document.getElementById("Username").value,
            "Password" : document.getElementById("Password").value,
            "Verifypassword" : document.getElementById("Verifypassword").value,
            "Displayname" : document.getElementById("Displayname").value,
            "Photo" : document.getElementById("Photo").value
        }
        users.push(user);
        printArray(users);
    }

    function printArray(p) {
        for(let i = 0; i < p.length; i++) {
            console.log(p[i].Username);
        }
    }
    
    

