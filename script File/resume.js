const hamburgerBtn = document.querySelector(".fa-bars")
const hamburgerMenu = document.querySelector("nav")

hamburgerBtn.addEventListener("click", ()=>{
    hamburgerBtn.classList.toggle("fa-xmark")
    hamburgerMenu.classList.toggle("hamburger-nav-active")
})