function toggleClass(){
  let menu = document.querySelector(".nav-links");
  menu.classList.toggle("toggleCls");
}

let hamburger = document.querySelector(".ham");

hamburger.addEventListener ("click", toggleClass);