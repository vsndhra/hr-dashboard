let sidemenu = document.querySelector(".sidemenu");
let toggleBtn = document.querySelector(".bx-menu");
console.log(toggleBtn);
toggleBtn.addEventListener("click", ()=>{
    sidemenu.classList.toggle("close");
});