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
// document.querySelector(".about-section-btn").onclick


const menuBtn = document.querySelector(".fa-bars")
const leftNav = document.querySelector(".left")
menuBtn.addEventListener("click", ()=>{
  menuBtn.classList.toggle("fa-xmark")
  leftNav.classList.toggle("nav-active")
})
