let form = document.getElementById("form");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("mail");
let password = document.getElementById("password");

form.addEventListener('submit', e => {
    e.preventDefault();
    const firstName = fName.value.trim();
    const lastName = lName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (firstName === "") {
        error(fName, "First Name Cannot be empty")
    } else {
        success(fName);
    }
    if (lastName === "") {
        error(lName, "Last Name Cannot be empty")
    } else {
        success(lName);
    }
    if (emailValue === "") {
        error(email, "Email Cannot be empty")
    } else {
        success(email);
    }
    if (passwordValue === "") {
        error(password, "Password Cannot be empty")
    }else {
        success(password);
    }
})

function error(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message || "Error";
    req.className = "error"
    span.className = "error-text";
    // if(req !== email ){
    //     req.value = " ";
    // }else{
    //     req.value = "email@examole/com";
    //     req.style.color = "#ff7978"
    // }
}

function success(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector("span");
    span.innerText = message || "Done";
    req.className = "success"
    span.className = "success-text";
}
