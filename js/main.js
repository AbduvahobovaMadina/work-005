import { USERS } from "../db/server.js"

// POPUP start
const btnOpen = document.querySelector(".btn__open")
const btnClose = document.querySelector(".btn__close")
const popap = document.querySelector(".popap")
const overlay = document.querySelector(".overlay")
// POPUP end



// MODEL start
const model = document.querySelector(".model")
const modelName = document.querySelector(".model__name")
const modelUsername = document.querySelector(".model__username")
const modelPassword = document.querySelector(".model__password")
const modelPasswordConfirm = document.querySelector(".model__password-confirm")
// MODEL end
const wrapper = document.querySelector(".wrapper")

function creatElement(data) {
    while (wrapper.firstChild) {
        wrapper.firstChild.remove();
    }
    data.forEach((user) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <div class="card__circle"></div>
      <h3>${user.name}</h3>
      <p>${user.username}</p>
      <p>${user.password}</p>`;
        wrapper.appendChild(card);
    });
}

creatElement(USERS);
console.log(USERS);


model.addEventListener("button", (event)=>{
    event.preventDefault()
    let name = modelName.value
    let username = modelUsername.value
    let password = modelPassword.value
    let modelPasswordConfirm = modelPasswordConfirm.value
    if(password !== modelPasswordConfirm){
        modelPassword.style.border = "1px solid red"
        modelPasswordConfirm.style.border = "1px solid red"
        return alert("parol bir xilmas")
    }
    let exitUser = USERS.findIndex(user => user.username === username)
    if(exitUser >= 0){
        return alert("username avval olingan")
    }
    modelPassword.style.border = "1px solid #000"
    modelPasswordConfirm.style.border = "1px solid #000"
    
    let newUsers = {
        id: new Date().getTime(),
        name,
        username,
        password
    }
    USERS.push(newUsers)
    console.log(newUsers);
})



btnOpen.addEventListener("click", ()=>{
    popap.style.display = "flex"
})

btnClose.addEventListener("click", ()=>{
    popap.style.display = "none"
})

overlay.addEventListener("click", ()=>{
    popap.style.display = "none"
})





document.querySelectorAll(".eye").forEach((textWrapper) => {
    const passwordInput = textWrapper.querySelector("input[type='password']");
    const openEyeBtn = textWrapper.querySelector(".fa-eye");
    const backEyeBtn = textWrapper.querySelector(".fa-eye-slash");

    openEyeBtn.style.display = "none";
    backEyeBtn.style.display = "none";

    passwordInput.addEventListener("input", () => {
        updateEyeIcons(passwordInput, openEyeBtn, backEyeBtn);
    });

    openEyeBtn.addEventListener("click", () => {
        togglePasswordVisibility(passwordInput, openEyeBtn, backEyeBtn);
    });

    backEyeBtn.addEventListener("click", () => {
        togglePasswordVisibility(passwordInput, openEyeBtn, backEyeBtn);
    });
});

function togglePasswordVisibility(passwordInput, openEyeBtn, backEyeBtn) {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        openEyeBtn.style.display = "none";
        backEyeBtn.style.display = "inline";
    } else {
        passwordInput.type = "password";
        openEyeBtn.style.display = "inline";
        backEyeBtn.style.display = "none";
    }
}

function updateEyeIcons(passwordInput, openEyeBtn, backEyeBtn) {
    if (passwordInput.value.length > 0) {
        openEyeBtn.style.display = "inline";
        backEyeBtn.style.display = "none";
    } else {
        openEyeBtn.style.display = "none";
        backEyeBtn.style.display = "none";
    }
}