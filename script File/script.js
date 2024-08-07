var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

const aboutBtn = document.querySelector(".about-section-btn")
const closeBtn = document.querySelector(".close")
const aboutSection = document.querySelector(".about")

aboutBtn.addEventListener("click", ()=>{
    aboutSection.classList.add("about-active")
})
closeBtn.addEventListener("click", ()=>{
  aboutSection.classList.remove("about-active")
})

const menuBtn = document.querySelector(".fa-bars")
const leftNav = document.querySelector(".left")
const close = document.querySelector(".close-nav")
menuBtn.addEventListener("click", ()=>{
  menuBtn.classList.toggle("fa-xmark")
  leftNav.classList.toggle("nav-active")
})
close.addEventListener("click",()=>{
  leftNav.classList.remove("nav-active")
})