const btnOpen = document.querySelector(".btn__open")
const btnClose = document.querySelector(".btn__close")
const popap = document.querySelector(".popap")
const overlay = document.querySelector(".overlay")

btnOpen.addEventListener("click", ()=>{
    popap.style.display = "flex"
})

btnClose.addEventListener("click", ()=>{
    popap.style.display = "none"
})

overlay.addEventListener("click", ()=>{
    popap.style.display = "none"
})
