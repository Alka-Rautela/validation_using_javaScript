//Getting all input text object
var username = document.forms["myForm"]["username"];
var email = document.forms["myForm"]["email"];
var password = document.forms["myForm"]["password"];
var password_confirmation= document.forms["myForm"]["password_confirmation"];
//getting all error display object
var username_error = document.getElementById("name_error");
var email_error = document.getElementById("email_error");
var password_error = document.getElementById("password_error");

//Setting all event listeners
username.addEventListener("blur", nameVerify, true);
email.addEventListener("blur", emailVerify, true);
password.addEventListener("blur", passwordVerify, true);

//validation function
function Validate(){
    if(username.value == ""){
        username.style.border = "1px solid red";
        name_error.textContent = "Username is required";
        username.focus();
        return false;
    }
    //email validation
    if(email.value == ""){
        email.style.border = "1px solid red";
        email_error.textContent = "Email is required";
        email.focus();
        return false;
    }
    //password validation
    if(password.value == ""){
        password.style.border = "1px solid red";
        password_error.textContent = "Password is required";            
        password.focus();
        return false;
    }
    //password confirmation
    if(password.value != password_confirmation.value){
        password.style.border = "1px solid red";
        password_confirmation.style.border = "1px solid red";
        password_error.innerHTML = "Passwords do not match"
        return false;
    }
}
//event handling functions
function nameVerify(){
    if(username.value != ""){
       username.style.border = "1px solid #5E6E66";
        username_error.innerHTML="";
        return true;
    }
}
function emailVerify(){
    if(email.value != ""){
       eamil.style.border = "1px solid #5E6E66";
        email_error.innerHTML="";
        return true;
    }
}
function passwordVerify(){
    if(password.value != ""){
        password.style.border = "1px solid #5E6E66";
        password_error.innerHTML="";
        return true;
    }
}
