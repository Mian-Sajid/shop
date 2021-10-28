

let nav = document.querySelector("nav");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

let navbar =document.querySelectorAll('.nav-link');
let collase = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click",function(){
        collase.classList.remove("show");
    })
})

document.querySelector('form').onsubmit = e => {
    e.target.submit();
    e.target.reset();
    return false;
 };
