const user = document.querySelector(".user")
const pass = document.querySelector(".pass")
const login = document.querySelector(".log_button")
const eror = document.querySelector(".eror")

login.addEventListener("click", () =>{
    if(user.value == localStorage.getItem("userName") && pass.value == localStorage.getItem("password")){
        console.log(1);
        user.value = ""
        pass.value = ""
        window.location.href = "page.html"
    }else{
        eror.innerHTML = `<p>Data does not match</p>`
        user.value = ""
        pass.value = ""
        e.preventDefault();
    }
})