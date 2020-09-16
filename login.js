const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var username = loginForm.username.value;
    var password = loginForm.password.value;
    
    if (username === "Alex" && password === "777") {
        alert("You have successfully logged in.");
        location.href="netflix/comedy.html";
        var username = loginForm.username.value="";
        var password = loginForm.password.value="";
       
    
       
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})