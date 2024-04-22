var typed = new Typed(".text", {
    strings: ["Programming" , "AI" , "Development"],
    typeSpeed:120,
    backSpeed:120,
    backDelay:900,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
