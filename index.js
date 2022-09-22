const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyiconEL = document.querySelector(".fa-copy");
const alertcontainerEl =  document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyiconEL.addEventListener("click", () => {
    copypassword();
    if(inputEl.value) {
        alertcontainerEl.classList.remove("active");
        setTimeout(() => {
            alertcontainerEl.classList.add("active");
        }, 2000)
    }
})

function createPassword() {
    const chars =  "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordlength = 9;
    let password = "";

    for (let index = 0; index < passwordlength; index++) {
        const RandomNum =Math.floor(Math.random() * chars.length);
        password += chars.substring(RandomNum, RandomNum + 1);  
    }

    inputEl.value = password;
    alertcontainerEl.innertext = password + "copied!"
}

function copypassword() {
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
}