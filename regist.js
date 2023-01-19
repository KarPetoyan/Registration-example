const user = document.querySelector(".user");
const mail = document.querySelector(".mail");
const pass1 = document.querySelector(".pass1");
const pass2 = document.querySelector(".pass2");
const reg = document.querySelector(".reg_button");
const eror = document.querySelector(".eror");

reg.addEventListener("click", (e)=>{
    if(pass1.value == pass2.value){
        eror.innerHTML = "";
        localStorage.setItem("userName", user.value);
        localStorage.setItem("mail", mail.value);
        localStorage.setItem("password", pass1.value);
        user.value = "";
        mail.value = "";
        pass1.value = "";
        pass2.value = "";
        window.location.href = "login.html"
    }else {
        pass1.value = "";
        pass2.value = "";
        eror.innerHTML = `<p>Password does not match</p>`;
        e.preventDefault();
    }
})