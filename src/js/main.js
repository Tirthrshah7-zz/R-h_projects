//header scroll
var scrollpos = window.scrollY;
var header = document.querySelector(".header");
window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if (scrollpos > 50) {
        header.classList.add("header-bg");
    }
    else {
        header.classList.remove("header-bg");
    }
});


// sidebar collaspe

var close = document.querySelectorAll(".ham-toggle");
var body = document.querySelector("body");
close.forEach(sidebar => {
    sidebar.addEventListener('click', () => {
        body.classList.toggle("side_collaspe");
    })
})
