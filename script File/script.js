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
