const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit', (e) => {
    let msg = [];
    // if(username.value === '' || username.value == null){
    //     msg.push('Name is required');
    // }
    // else if(password.value == null || password.value === ''){
    //     msg.push("password is empty");
    // }
    // else {
    //     if(username.value.length === password.value.length) {
    //         msg.push("login success");
    //     }
    //     else {
    //         msg.push("invalid username and password");
    //     }
    // }


    if(username.value == "admin" && password.value == "admin"){
        msg.push("login success");
        // window.location = "/New%20folder/secondPage.html";
        // window.location = "New%20folder/secondPage.html";
        
    }

    else if(username.value == "admin" && password.value != "admin"){
        msg.push("wrong password");
    }

    else if(username.value != "admin" && password.value == "admin"){
        msg.push("wrong username");
    }

    else {
        msg.push("Enter username and password");
    }

    if(msg.length > 0) {
        e.preventDefault();
        errorElement.innerText = msg;

    }
    
})