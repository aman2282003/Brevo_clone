let form =document.getElementById("form")
let email = document.getElementById("email")
let password = document.getElementById("password")
form.addEventListener("submit",function(event){
    event.preventDefault()
    let details ={
        email : email.value,
        password  :password.value
    };
    localStorage.setItem("details", JSON.stringify(details));
    alert("Account created successfully, please login to start")
})