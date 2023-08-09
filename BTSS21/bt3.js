function checkEmail(email) {
    let registeredEmails = ["abc@gmail.com"];
    return registeredEmails.includes(email);
}

let button = document.getElementById("button");
function check(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    if(email ==""){
        alert(" Enter your email");
        return;
    }
    if(email < 2){
        alert("Email was wrong");
        return;
    }
    if (checkEmail(email)) {
        alert("Email already exists");
        return;
    }
    if(password == ""){
        alert(" Enter your password");
        return;
    }
    if(confirm == ""){
        alert(" Enter your confirm password");
        return;
    }
    if(password != confirm){
        alert("Passwords don't match");
        return;
    }
    localStorage.setItem(email, password);
    alert("Successful login")
}
