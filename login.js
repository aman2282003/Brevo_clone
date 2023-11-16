let form =document.getElementById("form")
let email = document.getElementById("email")
let password = document.getElementById("password")
form.addEventListener("submit",function(event){
    event.preventDefault()
    let details ={
        email : email.value,
        password  :password.value
    };
        let savedetails = JSON.parse(localStorage.getItem("details")) || {};
    if (details.email ===savedetails.email &&
     details.password === savedetails.password){
        localStorage.setItem("isAuth", "Authenticated")
        alert("Login Successfull")
        window.location.href = './dashboard.html'
    }
    else{
        alert("Wrong credentials")
    }
})


