const form = document.getElementById("settingsForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let valid = true;

document.querySelectorAll(".error").forEach(error=>{
error.innerHTML="";
});

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

const confirmPassword = document.getElementById("confirmPassword").value;

if(name===""){
document.getElementById("nameError").innerHTML="Name is required";
valid=false;
}

const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(email)){
document.getElementById("emailError").innerHTML="Enter a valid email";
valid=false;
}

if(password.length<8){
document.getElementById("passwordError").innerHTML="Password must contain at least 8 characters";
valid=false;
}

if(password!==confirmPassword){
document.getElementById("confirmError").innerHTML="Passwords do not match";
valid=false;
}

if(valid){
alert("Settings Saved Successfully!");
form.reset();
}

});
