var full = document.querySelector(".full");
var menu = document.querySelector("h2");
var flag = 0;

menu.addEventListener("click", function(){
    if(flag == 0){
        full.style.top = "0";
        menu.innerHTML = `<i class="ri-close-fill"></i>`
        flag = 1;
    }
    else{
        full.style.top = "-100%";
        menu.innerHTML = `<i class="ri-menu-fill"></i>`
        flag= 0;
    }
})

gsap.from(".nav h1", {
    y : -100,
    opacity : 0,
    duration : 1,
})
gsap.from(".nav-part2 h4",{
    y :-100,
    opacity:0,
    stagger :0.3,
    duration:1,
})
gsap.from(".left h1" , {
    x: -100,
    opacity:0,
    delay:1,
    duration: 2,
})
gsap.from(".left p", {
    x: -100,
    opacity:0,
    delay:1,
    duration: 2,
})
gsap.from(".left button", {
    x: -100,
    opacity:0,
    delay:1,
    duration: 2,
})
gsap.from(".nav-part2 i", {
    y: -100,
 opacity:0,
   stagger :0.3,
   duration :1,
})
gsap.from(".right", {
    x: 100,
    opacity:0,
    delay:2,
    duration: 2,
})
